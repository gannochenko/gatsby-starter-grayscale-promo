import React, { FunctionComponent, useState, useEffect, useMemo } from 'react';
import EventEmitter from 'events';
import nanoid from 'nanoid';
import { debounce, throttle } from 'throttle-debounce';

import { ObjectLiteral } from '../type';

type ElementWithDataset = Element & { dataset: { effectsNodeId: string } };

export interface EffectProps {
    'data-effects-node-id': string;
    className: string;
    runEffect: boolean;
}

export const eventEmitter = new EventEmitter();

const Effect: FunctionComponent<{ children: any }> = ({ children }) => {
    const nodeId = useMemo(() => {
        let id = null;
        if (typeof window !== 'undefined') {
            // @ts-ignore
            const ids = window._effectIds;
            if (ids && ids.length) {
                id = ids.shift();
            }
        }

        if (!id) {
            id = nanoid();
        }

        return id;
    }, []);
    const [runEffect, setRunEffect] = useState(false);

    const onEventFire = (id: string) => {
        console.log(id.toString() + ' === ' + nodeId.toString());
        if (id.toString() === nodeId.toString()) {
            setRunEffect(true);
            eventEmitter.off('effect.run', onEventFire);
        }
    };

    useEffect(() => {
        console.log('event listener bound');
        eventEmitter.on('effect.run', onEventFire);
        eventEmitter.emit('react.ready');
        return () => {
            eventEmitter.off('effect.run', onEventFire);
        };
    }, [eventEmitter, onEventFire]);

    const effectProps = useMemo(
        () => ({
            'data-effects-node-id': nodeId,
            className: 'effects-node effects-node-' + nodeId,
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

const getItems = () =>
    document.querySelectorAll('.effects-node') as NodeListOf<
        ElementWithDataset
    >;

const onWindowUpdate = throttle(200, () => {
    const windowScrollTop = window.scrollY || window.pageYOffset;
    const windowBottom = window.innerHeight + windowScrollTop;

    const items = getItems();
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

    const firstPass = () => {
        if (typeof window !== 'undefined') {
            const items = getItems();
            // @ts-ignore
            window._effectIds = [];
            items.forEach(item => {
                // @ts-ignore
                window._effectIds.push(item.dataset.effectsNodeId);
            });
        }

        const onReactReady = debounce(100, () => {
            console.log('REACT READY');
        });

        eventEmitter.on('react.ready', onReactReady);
        setTimeout(() => {
            console.log('TIMEOUT');
            onWindowUpdate();
        }, 300);
    };

    if (document.readyState != 'loading') {
        firstPass();
    } else {
        const onLoad = () => {
            firstPass();
            document.removeEventListener('DOMContentLoaded', onLoad);
        };
        document.addEventListener('DOMContentLoaded', onLoad);
    }
};

export const stop = () => {
    window.removeEventListener('resize', onWindowUpdate);
    window.removeEventListener('scroll', onWindowUpdate);
};
