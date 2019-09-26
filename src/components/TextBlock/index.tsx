import React, { FunctionComponent } from 'react';

import { TextBlockContainer, Inner } from './style';
import { Props } from './type';

export const TextBlock: FunctionComponent<Props> = ({ children }) => {
    return (
        <TextBlockContainer>
            <Inner>{children}</Inner>
        </TextBlockContainer>
    );
};
