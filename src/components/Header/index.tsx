import React from 'react';
import { Container, BackgroundImage, ImageOverlay, Arrow } from './style';
import { Query } from './query';

export const Header = () => {
    return (
        <Query>
            {data => (
                <Container>
                    <BackgroundImage
                        sizes={data.backgroundImage.childImageSharp.sizes}
                    />
                    <ImageOverlay />
                    <Arrow />
                </Container>
            )}
        </Query>
    );
};
