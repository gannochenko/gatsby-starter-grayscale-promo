import React, { ComponentType } from 'react';
import { theme } from './theme';
import { media as styledMedia } from '@bucket-of-bolts/styled-companion';
import { ObjectLiteral } from '../type';

export const ThemeContext = React.createContext(theme);
export const withTheme = (Component: ComponentType<{ [key: string]: any }>) => {
    const ThemedComponent = (props: { [key: string]: any }) => (
        <ThemeContext.Consumer>
            {value => <Component {...props} theme={value} />}
        </ThemeContext.Consumer>
    );

    return ThemedComponent;
};

export const media = (rules: ObjectLiteral<string>) =>
    styledMedia(rules, theme.grid);
