import React, { ComponentType } from 'react';
import { theme } from './theme';
import {
    media as styledMedia,
    grid as styledGrid,
    cell as styledCell,
} from '@bucket-of-bolts/styled-companion';
import { ObjectLiteral } from '../type';

interface GridTheme {
    [k: string]: ObjectLiteral<string | number>;
}

export const ThemeContext = React.createContext(theme);
export const withTheme = (Component: ComponentType<ObjectLiteral>) => {
    const ThemedComponent = (props: ObjectLiteral) => (
        <ThemeContext.Consumer>
            {value => <Component {...props} theme={value} />}
        </ThemeContext.Consumer>
    );

    return ThemedComponent;
};

export const media = (rules: ObjectLiteral<string>) =>
    styledMedia(rules, theme.grid);

export const grid = (rules: GridTheme = {}) => styledGrid(rules, theme.grid);

export const cell = (rules: ObjectLiteral<string | number> = {}) =>
    styledCell(rules, theme.grid);
