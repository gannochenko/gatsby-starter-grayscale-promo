import React, { FunctionComponent, useState, useEffect, useMemo } from 'react';
import EventEmitter from 'events';
import nanoid from 'nanoid';
import { throttle } from 'throttle-debounce';

import { ObjectLiteral } from '../type';
import { on } from 'cluster';

export type EffectRun = boolean;
export interface EffectProps {
    'data-effects-node-id': string;
}

export const eventEmitter = new EventEmitter();

const onWindowUpdate = throttle(200, () => {
    const items = document.querySelectorAll('.effects-node');
    console.log(items);
});

const Effect: FunctionComponent<{ children: any }> = ({ children }) => {
    const nodeId = useMemo(() => {
        return nanoid();
    }, []);
    const [runEffect, setRunEffect] = useState(false);

    const onEventFire = (id: string) => {
        if (id === nodeId) {
            setRunEffect(true);
        }
    };

    useEffect(() => {
        eventEmitter.on('effect.fire', onEventFire);
        return () => {
            eventEmitter.off('effect.fire', onEventFire);
        };
    }, [onEventFire]);

    return children({
        runEffect,
        effectProps: {
            'data-effects-node-id': nodeId,
            className: 'effects-node',
        },
    });
};

export const withEffects = (Component: any) => {
    const WithEffects = (props: ObjectLiteral) => {
        return (
            <Effect>
                {(effectProps: ObjectLiteral<EffectProps | EffectRun>) => (
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
