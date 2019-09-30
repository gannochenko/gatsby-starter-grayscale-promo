import styled from 'styled-components';
import { media } from '../../style';
// import {
//   align
// } from '@bucket-of-bolts/styled-companion';

export const CopyrightContainer = styled.div`
    text-align: center;
    font-size: 0.6rem;
    ${media({ xs: 'font-size: 0.6rem;' })};
    color: #6c7a89;
    margin: 0.5rem 0.25rem;
`;
