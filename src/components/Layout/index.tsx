import React, { FunctionComponent } from 'react';
// import { Link } from 'gatsby';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { Props } from './type';

export const Layout: FunctionComponent<Props> = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            {children}
        </ThemeContext.Provider>
    );
};
