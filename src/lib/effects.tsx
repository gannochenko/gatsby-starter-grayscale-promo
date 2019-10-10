import React, { FunctionComponent, useState, useEffect, useMemo } from 'react';
import EventEmitter from 'events';
import { debounce, throttle } from 'throttle-debounce';

import { ObjectLiteral } from '../type';

type ElementWithDataset = Element & { dataset: { effectsNodeId: string } };

export interface EffectProps {
    'data-effects-node-id': string;
    className: string;
    runEffect: boolean;
}

export const eventEmitter = new EventEmitter();
const idGenerator = function*() {
    let i = 0;
    while (true) {
        i += 1;
        yield i.toString();
    }
};

const generator = idGenerator();

const Effect: FunctionComponent<{ children: any }> = ({ children }) => {
    const nodeId = useMemo(() => {
        // let id = null;
        // if (typeof window !== 'undefined') {
        //     // @ts-ignore
        //     const ids = window._effectIds;
        //     if (ids && ids.length) {
        //         id = ids.shift();
        //     }
        // }
        //
        // if (!id) {
        //     id = nanoid();
        // }

        return generator.next().value;
    }, []);
    const [runEffect, setRunEffect] = useState(false);

    const onEventFire = (id: string) => {
        if (id.toString() === nodeId.toString()) {
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
        eventEmitter.emit('effect.run', [id]);
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

    // const firstPass = () => {
    //     // if (typeof window !== 'undefined') {
    //     //     const items = getItems();
    //     //     // @ts-ignore
    //     //     window._effectIds = [];
    //     //     items.forEach(item => {
    //     //         // @ts-ignore
    //     //         window._effectIds.push(item.dataset.effectsNodeId);
    //     //     });
    //     // }
    //
    //     const onReactReady = debounce(100, () => {
    //         eventEmitter.off('react.ready', onReactReady);
    //         onWindowUpdate();
    //     });
    //
    //     eventEmitter.on('react.ready', onReactReady);
    // };
    //
    // if (document.readyState != 'loading') {
    //     firstPass();
    // } else {
    //     const onLoad = () => {
    //         firstPass();
    //         document.removeEventListener('DOMContentLoaded', onLoad);
    //     };
    //     document.addEventListener('DOMContentLoaded', onLoad);
    // }
};

export const stop = () => {
    window.removeEventListener('resize', onWindowUpdate);
    window.removeEventListener('scroll', onWindowUpdate);
};

export const renderEffect = () => {};
