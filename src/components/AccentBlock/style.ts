import styled from 'styled-components';
import { align } from '@bucket-of-bolts/styled-companion/build';
import { media } from '../../style';

export const AccentBlockContainer = styled.div`
    margin: 4rem 1rem;
    ${media({ xs: 'margin: 2rem 0rem;' })}
    ${align('center', 'center')};
    position: relative;
    font-weight: 600;
`;

export const Inner = styled.div`
    width: 100%;
    text-align: center;
    &:after,
    &:before {
        content: '';
        position: absolute;
        top: auto;
        bottom: auto;
        left: auto;
        right: auto;
        top: 0;
        height: 1px;
        width: 200px;
        background-color: #000;
    }
`;
