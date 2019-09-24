import React, { FunctionComponent } from 'react';
import {
    Container,
    BackgroundImage,
    ImageOverlay,
    Arrow,
    Data,
    Title,
} from './style';
import { Query } from './query';

export const Intro: FunctionComponent<{}> = () => {
    return (
        <Query>
            {data => (
                <Container>
                    <BackgroundImage
                        sizes={data.backgroundImage.childImageSharp.sizes}
                    />
                    <ImageOverlay />
                    <Data>
                        <Title>Save whales. Спасите китов</Title>
                    </Data>
                    <Arrow />
                </Container>
            )}
        </Query>
    );
};
