import styled from 'styled-components';
import { align, group } from '@bucket-of-bolts/styled-companion';
import { media } from '../../style';

export const Container = styled.div`
    position: relative;
    margin: 0;
    padding: 2rem 1rem;
    ${media({ xs: 'padding: 1rem;' })}
    ${align('center', 'center', 'column')}
    ${group('0.5rem')};

    background-color: #333333;
    color: white;
    font-size: 0.8rem;
    font-weight: 300;
`;

export const Info = styled.div``;

export const NoWrap = styled.span`
    white-space: nowrap;
`;
