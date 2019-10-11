import styled from 'styled-components';
import Img from 'gatsby-image';
import {
    absoluteCover,
    central,
    bouncedAnimation,
    align,
    icon,
} from '@bucket-of-bolts/styled-companion';
import { media } from '../../style';
import { withEffects, effect } from '../../lib/effects';

export const Container = styled.div`
    position: relative;
    min-width: 320px;
    font-family: Montserrat, sans-serif;
`;

export const BackgroundImage = styled(Img)`
    ${absoluteCover()};
    user-select: none;
    position: absolute !important;
`;

export const ImageOverlay = styled.div`
    ${absoluteCover()};
    background-color: black;
    opacity: 0.6;
`;

const expandVertically = 'height: 100vh; overflow-y: hidden;';
export const Data = styled.div`
    ${central()}
    ${align('center', 'center', 'column')}
    ${media({
        md: expandVertically,
        lg: expandVertically,
    })}
    padding: 2rem 1rem;
    position: relative;
`;

export const Arrow = withEffects(styled.div`
    ${icon('keyboard_arrow_down')};
    position: absolute;
    left: calc(50% - 2rem);

    cursor: pointer;
    bottom: 2.5rem;
    color: white;
    font-size: 3rem;

    animation-name: ${bouncedAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in;

    display: none;
    ${media({
        lg: 'display: block;',
        md: 'display: block;',
    })}

    // @ts-ignore
    ${props => effect(props)}
`);

export const Title = withEffects(styled.h1`
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: 0.4rem;
    ${media({
        xs: `
        font-size: 1.5rem;
        letter-spacing: 0.15rem;
    `,
    })};
    color: white;
    text-align: center;
    margin: 0;

    // @ts-ignore
    ${props => effect(props)}
`);

export const SubTitle = withEffects(styled.div`
    color: #fff;
    position: relative;
    text-align: center;
    font-size: 1.3rem;
    max-width: 60%;
    margin: 1rem 0 0 0;
    padding: 0;
    ${media({
        xs: `
        font-size: 1rem;
    `,
    })}

    // @ts-ignore
    ${props => effect(props)}
`);
