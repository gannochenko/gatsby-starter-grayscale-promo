import React, { FunctionComponent } from 'react';
// import { Link } from 'gatsby';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { LayoutProps } from './props';

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            {children}
        </ThemeContext.Provider>
    );
};
