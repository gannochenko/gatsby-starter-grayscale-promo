import React, { FunctionComponent } from 'react';

import {
    StandardBlockContainer,
    Inner,
    ImageSingle,
    ImageWrap,
    Image,
    ImageGalleryGrid,
    ImageGallery,
    GalleryItem,
} from './style';
import { Props } from './type';
import { Copyright } from '../Copyright';

export const StandardBlock: FunctionComponent<Props> = ({
    html,
    fontSize = 'standard',
    graphics = [],
}) => {
    graphics = graphics || [];
    fontSize = fontSize || 'standard';

    return (
        <StandardBlockContainer>
            {!!html && (
                <Inner
                    dangerouslySetInnerHTML={{ __html: html }}
                    fontSize={fontSize}
                />
            )}
            {graphics.length === 1 && (
                <ImageSingle>
                    <ImageWrap>
                        <Image
                            sizes={graphics[0].image.childImageSharp.fluid}
                        />
                        <Copyright {...graphics[0]} />
                    </ImageWrap>
                </ImageSingle>
            )}
            {graphics.length > 1 && (
                <ImageGallery>
                    <ImageGalleryGrid>
                        {graphics.map((item, key) => (
                            <GalleryItem key={key}>
                                <Image
                                    sizes={item.image.childImageSharp.fluid}
                                />
                                <Copyright {...item} />
                            </GalleryItem>
                        ))}
                    </ImageGalleryGrid>
                </ImageGallery>
            )}
        </StandardBlockContainer>
    );
};
