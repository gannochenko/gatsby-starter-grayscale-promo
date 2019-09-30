import React, { FunctionComponent } from 'react';

import {
    TextBlockContainer,
    Inner,
    ImageBlockSingle,
    ImageBlockWrap,
    Image,
} from './style';
import { Props } from './type';
import { Copyright } from '../Copyright';

export const TextBlock: FunctionComponent<Props> = ({
    html,
    graphics = [],
}) => {
    graphics = graphics || [];

    return (
        <TextBlockContainer>
            {!!html && <Inner dangerouslySetInnerHTML={{ __html: html }} />}
            {graphics.length === 1 && (
                <ImageBlockSingle>
                    <ImageBlockWrap>
                        <Image
                            sizes={graphics[0].image.childImageSharp.fluid}
                        />
                        <Copyright>Lala</Copyright>
                    </ImageBlockWrap>
                </ImageBlockSingle>
            )}
        </TextBlockContainer>
    );
};
