import React, { FunctionComponent } from 'react';
import { Container, Info, NoWrap } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; 2019</NoWrap>{' '}
                <NoWrap>
                    &laquo;Grayscale Promo!&raquo; &mdash; a GatsbyJS starter
                </NoWrap>
            </Info>
            <Info>Our website uses no cookies :)</Info>
        </Container>
    );
};
