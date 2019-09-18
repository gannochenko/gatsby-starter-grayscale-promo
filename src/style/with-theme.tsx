import React, { ComponentType } from 'react';
import { theme } from './theme';

export const ThemeContext = React.createContext(theme);
export const withTheme = (Component: ComponentType<{ [key: string]: any }>) => {
    const ThemedComponent = (props: { [key: string]: any }) => (
        <ThemeContext.Consumer>
            {value => <Component {...props} theme={value} />}
        </ThemeContext.Consumer>
    );

    return ThemedComponent;
};
