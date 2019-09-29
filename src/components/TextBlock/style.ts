import styled from 'styled-components';
import { align } from '@bucket-of-bolts/styled-companion/build';
import { media } from '../../style';
// import {
//   align
// } from '@bucket-of-bolts/styled-companion';

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
