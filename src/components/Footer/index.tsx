import React, { FunctionComponent } from 'react';
import { Container, Info } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>&copy; 2018 г. &laquo;Прусское Наследие&raquo;</Info>
            <Info>Наш веб-сайт не использует cookies ;)</Info>
        </Container>
    );
};
