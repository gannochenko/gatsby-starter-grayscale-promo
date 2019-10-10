import React, { FunctionComponent } from 'react';
import animateScrollTo from 'animated-scroll-to';
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
    const scrollWindow = () => {
        const data = document.querySelector('.intro-data');
        if (data) {
            const dataRect = data.getBoundingClientRect();
            console.log(dataRect.top + dataRect.height);
            animateScrollTo(dataRect.top + dataRect.height, {
                speed: 1000,
            });
        }
    };

    return (
        <Query>
            {data => (
                <>
                    <Container>
                        <BackgroundImage
                            sizes={data.backgroundImage.childImageSharp.fluid}
                        />
                        <ImageOverlay />
                        <Data className="intro-data">
                            <Title>Every day we loose thousands of trees</Title>
                            <SubTitle>We need to plant more trees!</SubTitle>
                        </Data>
                        <Arrow onClick={() => scrollWindow()} />
                    </Container>
                    <Copyright author="niko photos" source="Unsplash" />
                </>
            )}
        </Query>
    );
};
