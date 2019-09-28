import React, { FunctionComponent } from 'react';

import { TextBlockContainer, Inner } from './style';
import { Props } from './type';

export const TextBlock: FunctionComponent<Props> = ({ html }) => {
    return (
        <TextBlockContainer>
            <Inner dangerouslySetInnerHTML={{ __html: html }} />
        </TextBlockContainer>
    );
};
