import React, { FunctionComponent, useState, useEffect, useMemo } from 'react';
import EventEmitter from 'events';
import nanoid from 'nanoid';
import { throttle } from 'throttle-debounce';

import { ObjectLiteral } from '../type';
import { createDecipher } from 'crypto';

type ElementWithDataset = Element & { dataset: { effectsNodeId: string } };

export interface EffectProps {
    'data-effects-node-id': string;
    className: string;
    runEffect: boolean;
}

export const eventEmitter = new EventEmitter();

const Effect: FunctionComponent<{ children: any }> = ({ children }) => {
    const nodeId = useMemo(() => {
        return nanoid();
    }, []);
    const [runEffect, setRunEffect] = useState(false);

    const onEventFire = (id: string) => {
        console.log('DEBUG received for ' + id);
        console.log(id + ' === ' + nodeId);
        console.log(typeof id + ' === ' + typeof nodeId);
        console.log(id.toString() + ' === ' + nodeId.toString());
        if (id.toString() === nodeId.toString()) {
            console.log('set state for ' + id);
            setRunEffect(true);
            eventEmitter.off('effect.run', onEventFire);
        }
    };

    useEffect(() => {
        eventEmitter.on('effect.run', onEventFire);
        return () => {
            eventEmitter.off('effect.run', onEventFire);
        };
    }, [eventEmitter, onEventFire]);

    const effectProps = useMemo(
        () => ({
            'data-effects-node-id': nodeId,
            className: 'effects-node',
            runEffect,
        }),
        [runEffect, nodeId],
    );

    return children({
        effectProps,
    });
};

export const withEffects = (Component: any) => {
    const WithEffects = (props: ObjectLiteral) => {
        return (
            <Effect>
                {(effectProps: ObjectLiteral<EffectProps>) => (
                    <Component {...props} {...effectProps} />
                )}
            </Effect>
        );
    };

    const wrappedComponentName =
        Component.displayName || Component.name || 'Component';

    WithEffects.displayName = `withEffects(${wrappedComponentName})`;
    return WithEffects;
};

const onWindowUpdate = throttle(200, () => {
    const windowScrollTop = window.scrollY || window.pageYOffset;
    const windowBottom = window.innerHeight + windowScrollTop;

    const items = document.querySelectorAll('.effects-node') as NodeListOf<
        ElementWithDataset
    >;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const id = item.dataset.effectsNodeId;

        const itemRect = item.getBoundingClientRect();
        const itemTop = itemRect.top + windowScrollTop;
        if (itemTop + Math.min(itemRect.height * 0.2, 200) < windowBottom) {
            item.classList.remove('effects-node');
            eventEmitter.emit('effect.run', [id]);
        }
    }
});

export const start = () => {
    window.addEventListener('resize', onWindowUpdate, true);
    window.addEventListener('scroll', onWindowUpdate, true);

    if (document.readyState != 'loading') {
        onWindowUpdate();
    } else {
        const onLoad = () => {
            onWindowUpdate();
            document.removeEventListener('DOMContentLoaded', onWindowUpdate);
        };
        document.addEventListener('DOMContentLoaded', onLoad);
    }
};

export const stop = () => {
    window.removeEventListener('resize', onWindowUpdate);
    window.removeEventListener('scroll', onWindowUpdate);
};
