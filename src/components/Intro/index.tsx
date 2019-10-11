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
            const windowScrollTop = window.scrollY || window.pageYOffset;
            const dataRect = data.getBoundingClientRect();
            animateScrollTo(dataRect.top + dataRect.height + windowScrollTop, {
                speed: 1000,
            });
        }
    };

    const timeoutBase = 500;

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
                            <Title
                                effect="fade-slide-left"
                                effectTimeout={timeoutBase}
                            >
                                Greyscale promo
                            </Title>
                            <SubTitle
                                effect="fade-slide-bottom"
                                effectTimeout={timeoutBase + 500}
                            >
                                Gatsby starter
                            </SubTitle>
                        </Data>
                        <Arrow
                            effectTimeout={timeoutBase + 1500}
                            onClick={() => scrollWindow()}
                        />
                    </Container>
                    <Copyright author="niko photos" source="Unsplash" />
                </>
            )}
        </Query>
    );
};
