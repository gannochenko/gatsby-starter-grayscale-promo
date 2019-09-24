import styled from 'styled-components';
import { align, group } from '@bucket-of-bolts/styled-companion';
import { media } from '../../style';

export const Container = styled.div`
    position: relative;
    margin: 0;
    padding: 3rem 1rem;
    ${media({ xs: 'padding: 1rem;' })}
    ${align('center', 'center')}
    ${group(null, '1rem')}

    background-color: #161414;
    color: white;
`;

export const Info = styled.div``;

export const NoWrap = styled.span`
    white-space: nowrap;
`;
