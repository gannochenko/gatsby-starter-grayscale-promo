import styled from 'styled-components';
import { align } from '@bucket-of-bolts/styled-companion/build';
import Img from 'gatsby-image';
import { media } from '../../style';

export const TextBlockContainer = styled.div`
    margin: 4rem 1rem;
    ${media({ xs: 'margin: 2rem 0rem;' })}
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
    ${align('center', 'center')};
    width: 100%;
`;

export const ImageBlockWrap = styled.div`
    width: 75%;
    ${media({ xs: 'width: 100%;' })}
`;

export const Image = styled(Img)`
    width: 100%;
    height: auto;
    background-color: #f2f1ef;
`;
