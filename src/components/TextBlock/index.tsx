import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';

import {
    TextBlockContainer,
    Inner,
    ImageBlockSingle,
    ImageBlockWrap,
} from './style';
import { Props } from './type';

export const TextBlock: FunctionComponent<Props> = ({
    html,
    graphics = [],
}) => {
    graphics = graphics || [];

    return (
        <TextBlockContainer>
            {!!html && <Inner dangerouslySetInnerHTML={{ __html: html }} />}
            {!!graphics.length && (
                <ImageBlockSingle>
                    <ImageBlockWrap>
                        <Img sizes={graphics[0].image.childImageSharp.fluid} />
                    </ImageBlockWrap>
                </ImageBlockSingle>
            )}
        </TextBlockContainer>
    );
};
