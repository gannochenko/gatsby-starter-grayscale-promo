import React from 'react';
// import { Link } from 'gatsby';
import GlobalStyle, { ThemeContext, theme } from '../../style/global';

const Layout = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            {children}
        </ThemeContext.Provider>
    );
};

export default Layout;
