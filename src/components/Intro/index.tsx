import React, { FunctionComponent } from 'react';
import {
    Container,
    BackgroundImage,
    ImageOverlay,
    Arrow,
    Data,
    Title,
    SubTitle,
} from './style';
import { Query } from './query';
import { Copyright } from '../Copyright';

export const Intro: FunctionComponent<{}> = () => {
    return (
        <Query>
            {data => (
                <>
                    <Container>
                        <BackgroundImage
                            sizes={data.backgroundImage.childImageSharp.fluid}
                        />
                        <ImageOverlay />
                        <Data>
                            <Title>Every day we loose thousands of trees</Title>
                            <SubTitle>We need to plant more trees!</SubTitle>
                        </Data>
                        <Arrow />
                    </Container>
                    <Copyright author="niko photos" source="Unsplash" />
                </>
            )}
        </Query>
    );
};
