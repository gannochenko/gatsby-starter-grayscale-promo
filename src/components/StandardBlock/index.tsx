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
import { withEffects } from '../../lib/effects';

const StandardBlockComponent: FunctionComponent<Props> = props => {
    let { fontSize = 'standard', graphics = [] } = props;

    const { html, effectTimeout } = props;

    graphics = graphics || [];
    fontSize = fontSize || 'standard';

    let timeout = effectTimeout || 0;

    return (
        <StandardBlockContainer {...props}>
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
                        {graphics.map((item, key) => {
                            timeout += 200;
                            return (
                                <GalleryItem
                                    key={key}
                                    effect="fade-slide-top"
                                    effectTimeout={timeout}
                                >
                                    <Image
                                        sizes={item.image.childImageSharp.fluid}
                                    />
                                    <Copyright {...item} />
                                </GalleryItem>
                            );
                        })}
                    </ImageGalleryGrid>
                </ImageGallery>
            )}
        </StandardBlockContainer>
    );
};

export const StandardBlock = withEffects(StandardBlockComponent);
