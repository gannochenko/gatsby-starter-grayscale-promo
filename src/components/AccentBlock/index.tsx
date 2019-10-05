import React, { FunctionComponent } from 'react';

import { withEffects } from '../../lib/effects';
import { AccentBlockContainer, Inner, Dash } from './style';
import { Props } from './type';

const AccentBlockComponent: FunctionComponent<Props> = ({
    html,
    fontSize = 'large',
    runEffect = false,
    effectProps = {},
}) => {
    console.log(runEffect);
    return (
        <AccentBlockContainer fontSize={fontSize} {...effectProps}>
            <Dash />
            <Inner dangerouslySetInnerHTML={{ __html: html }} />
            <Dash bottom />
        </AccentBlockContainer>
    );
};

export const AccentBlock = withEffects(AccentBlockComponent);
