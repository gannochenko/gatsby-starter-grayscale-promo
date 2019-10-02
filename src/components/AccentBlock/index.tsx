import React, { FunctionComponent } from 'react';

import { AccentBlockContainer, Inner } from './style';
import { Props } from './type';

export const AccentBlock: FunctionComponent<Props> = ({ html }) => {
    return (
        <AccentBlockContainer>
            <Inner dangerouslySetInnerHTML={{ __html: html }} />
        </AccentBlockContainer>
    );
};
