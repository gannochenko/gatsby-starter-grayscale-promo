import React from 'react';
import theme from './theme.js';

export const ThemeContext = React.createContext(theme);
export const withTheme = Component => {
    return props => (
        <ThemeContext.Consumer>
            {value => <Component {...props} theme={value} />}
        </ThemeContext.Consumer>
    );
};
