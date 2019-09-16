import styled from 'styled-components';
import { align, bgColor, central } from 'sc-companion';
import { Link } from 'gatsby';

export const So = styled.div`
    font-size: 1.5rem;
`;

export const Explanation = styled.p`
    text-align: center;
    font-size: 1rem;
    margin-bottom: 2rem;
`;

export const ButtonLink = styled(Link)`
    padding: 1rem 2rem;
    border-radius: 3px;
    border: 0 none;
    color: white;
    ${bgColor('red')}
    cursor: pointer;
`;

export const Title2 = styled.h2`
    ${align('center', 'center')}
    padding: 0;
    margin: 0 0 1rem 0;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 1.5rem;
`;

export const Central = styled.div`
    ${central()}
    min-width: 320px;
    padding: 0 1rem;
`;
