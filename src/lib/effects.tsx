import React, { FunctionComponent, useState, useEffect, useMemo } from 'react';
import EventEmitter from 'events';
import { throttle } from 'throttle-debounce';

import { ObjectLiteral } from '../type';

type ElementWithDataset = Element & { dataset: { effectsNodeId: string } };

export interface EffectProps {
    'data-effects-node-id': string;
    className: string;
    runEffect: boolean;
}

export const eventEmitter = new EventEmitter();
const IDGenerator = function*() {
    let i = 0;
    while (true) {
        i += 1;
        yield i.toString();
    }
};

export const idGenerator = IDGenerator();

const EVENT_EFFECT_RUN = 'effect.run';

const Effect: FunctionComponent<{ children: any }> = ({ children }) => {
    const nodeId = useMemo(() => {
        return idGenerator.next().value;
    }, []);
    const [runEffect, setRunEffect] = useState(false);

    const onEventFire = (id: string) => {
        if (id.toString() === nodeId.toString()) {
            setRunEffect(true);
            eventEmitter.off(EVENT_EFFECT_RUN, onEventFire);
        }
    };

    useEffect(() => {
        eventEmitter.on(EVENT_EFFECT_RUN, onEventFire);
        return () => {
            eventEmitter.off(EVENT_EFFECT_RUN, onEventFire);
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

    const html = children({
        effectProps,
    });

    useEffect(() => {
        setTimeout(() => eventEmitter.emit('element.ready', [nodeId]), 100);
    }, []);

    return html;
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

const processNode = (
    node: ElementWithDataset,
    id?: string,
    windowScrollTop?: number,
    windowBottom?: number,
) => {
    if (!id) {
        id = node.dataset.effectsNodeId;
    }

    if (windowScrollTop === undefined) {
        windowScrollTop = window.scrollY || window.pageYOffset;
    }

    if (windowBottom === undefined) {
        windowBottom = window.innerHeight + windowScrollTop;
    }

    const itemRect = node.getBoundingClientRect();
    const itemTop = itemRect.top + windowScrollTop;
    if (itemTop + Math.min(itemRect.height * 0.2, 200) < windowBottom) {
        node.classList.remove('effects-node');
        eventEmitter.emit(EVENT_EFFECT_RUN, [id]);
    }
};

const onWindowUpdate = throttle(200, () => {
    const windowScrollTop = window.scrollY || window.pageYOffset;
    const windowBottom = window.innerHeight + windowScrollTop;

    const items = getItems();
    for (let i = 0; i < items.length; i++) {
        processNode(items[i], undefined, windowScrollTop, windowBottom);
    }
});

export const start = () => {
    window.addEventListener('resize', onWindowUpdate, true);
    window.addEventListener('scroll', onWindowUpdate, true);

    eventEmitter.on('element.ready', ([id]: string[]) => {
        const node = document.querySelector(
            `[data-effects-node-id="${id}"]`,
        ) as ElementWithDataset;
        if (node) {
            processNode(node);
        }
    });
};

export const stop = () => {
    window.removeEventListener('resize', onWindowUpdate);
    window.removeEventListener('scroll', onWindowUpdate);
};
