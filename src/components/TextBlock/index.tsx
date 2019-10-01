import React, { FunctionComponent } from 'react';

import {
    TextBlockContainer,
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

export const TextBlock: FunctionComponent<Props> = ({
    html,
    graphics = [],
}) => {
    graphics = graphics || [];

    return (
        <TextBlockContainer>
            {!!html && <Inner dangerouslySetInnerHTML={{ __html: html }} />}
            {graphics.length === 1 && (
                <ImageSingle>
                    <ImageWrap>
                        <Image
                            sizes={graphics[0].image.childImageSharp.fluid}
                        />
                        {!!graphics[0].author && (
                            <Copyright>{graphics[0].author}</Copyright>
                        )}
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
                                {!!item.author && (
                                    <Copyright>{item.author}</Copyright>
                                )}
                            </GalleryItem>
                        ))}
                    </ImageGalleryGrid>
                </ImageGallery>
            )}
        </TextBlockContainer>
    );
};
