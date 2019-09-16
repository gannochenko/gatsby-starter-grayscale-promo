import React from 'react';
import { createGlobalStyle } from 'styled-components';
import _theme from './theme.js';

export const theme = _theme;
export const ThemeContext = React.createContext(theme);
export const withTheme = Component => {
    return props => (
        <ThemeContext.Consumer>
            {value => <Component {...props} theme={value} />}
        </ThemeContext.Consumer>
    );
};
export default withTheme(createGlobalStyle`

  // @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Lato');
  // @import url('https://fonts.googleapis.com/css?family=Hind');

  html {
    font-size: 20px;
  }

  body {
    padding: 0 !important;
    margin: 0 !important;
    font-weight: 400;
    line-height: 1.8;
    letter-spacing: -0.05px;
    color: ${props => props.theme.color.text};
    font-family: Lato, sans-serif;
    min-width: 320px;
    background-color: ${props => props.theme.color.background};
  }

  html, body, #root {
    height: 100vh;
  }

  button, a, input, textarea {
    outline: none;
  }

  * {
    box-sizing: border-box;
    &:before, &:after {
      box-sizing: border-box;
    }
  
    outline: none;
  }
  
  h1, h2, h3 {
    font-weight: normal;
  }
`);
