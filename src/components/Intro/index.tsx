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
                        <Title>
                            Every day millions of trees get killed around the
                            globe
                        </Title>
                    </Data>
                    <Arrow />
                </Container>
            )}
        </Query>
    );
};
