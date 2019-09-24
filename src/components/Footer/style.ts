import styled from 'styled-components';
import { media, align, group } from '@bucket-of-bolts/styled-companion';
import { theme } from '../../style';

export const Container = styled.div`
    position: relative;
    margin: 0;
    ${media({ all: 'padding: 3rem 1rem;', xs: 'padding: 1rem;' }, theme.grid)}
    ${align('center', 'center')}
    ${group(null, '1rem')}

    background-color: black;
    color: white;
`;

export const Info = styled.div``;
