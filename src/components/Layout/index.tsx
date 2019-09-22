import React, { FunctionComponent } from 'react';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { Inner } from './style';
import { Props } from './type';

export const Layout: FunctionComponent<Props> = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            <Inner>{children}</Inner>
        </ThemeContext.Provider>
    );
};
