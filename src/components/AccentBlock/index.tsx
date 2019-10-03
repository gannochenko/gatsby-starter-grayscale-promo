import React, { FunctionComponent } from 'react';

import { AccentBlockContainer, Inner, Dash } from './style';
import { Props } from './type';

export const AccentBlock: FunctionComponent<Props> = ({
    html,
    fontSize = 'large',
}) => {
    return (
        <AccentBlockContainer fontSize={fontSize}>
            <Dash />
            <Inner dangerouslySetInnerHTML={{ __html: html }} />
            <Dash bottom />
        </AccentBlockContainer>
    );
};
