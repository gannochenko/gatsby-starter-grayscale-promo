import styled from 'styled-components';
import { align } from '@bucket-of-bolts/styled-companion/build';
import { media, withTheme } from '../../style';

export const AccentBlockContainer = withTheme(styled.div`
    margin: 3rem 1rem;
    ${media({ xs: 'margin: 2rem 0rem;' })}
    ${align('center', 'center', 'column')};
    position: relative;
    // @ts-ignore
    font-size: ${props => props.theme.font[props.fontSize]};
`);

export const Inner = styled.div`
    text-align: center;
    max-width: 60%;
    ${media({ xs: 'max-width: 80%;' })};
`;

interface DashProps {
    bottom?: boolean;
}

export const Dash = styled.div<DashProps>`
    height: 1px;
    width: 200px;
    background-color: #000;
    ${props => (props.bottom ? 'margin-top' : 'margin-bottom')}: 1rem;
`;
