import styled from 'styled-components';
import { align } from '@bucket-of-bolts/styled-companion/build';
import { media } from '../../style';

export const TextBlockContainer = styled.div`
    margin: 4rem 1rem;
    ${media({ xs: 'margin: 2rem 1rem;' })}
    ${align('center', 'center')};
    position: relative;
`;

export const Inner = styled.div`
    max-width: 60%;
    font-size: 1.4rem;
    font-family: Roboto, serif;
    font-weight: 300;
`;

export const ImageBlockSingle = styled.div`
    position: relative;
    ${align('center', 'center')}
`;

export const ImageBlockWrap = styled.div`
    background-color: red;

    max-width: 75%;
    @media screen and (max-width: 39.9375em) {
        max-width: 100%;
    }

    img {
        width: 100%;
    }
`;
