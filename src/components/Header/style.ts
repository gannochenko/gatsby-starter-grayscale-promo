import styled from 'styled-components';
import Img from 'gatsby-image';
import {
    absoluteCover,
    central,
    backgroundCover,
    rectangle,
    op,
    bouncedAnimation,
    media,
} from '@bucket-of-bolts/styled-companion';
import { withTheme } from '../../style';
import imgArrow from '../../images/arrow-down.svg';

export const Container = withTheme(styled.div`
    position: relative;
    min-width: 320px;
`);

export const BackgroundImage = styled(Img)`
    ${absoluteCover()}
    user-select: none;
    position: absolute !important;
`;

export const ImageOverlay = styled.div`
    ${absoluteCover()}
    background-color: black;
    opacity: 0.6;
`;

const expandVertically = 'height: 100vh; overflow-y: hidden;';
export const Data = styled.div`
    ${central()}
    ${props =>
        media(
            { md: expandVertically, lg: expandVertically },
            props.theme.grid,
        )}
  padding: 2rem 1rem;
`;

export const Arrow = styled.div`
  position: absolute;
  left: calc(50% - ${op('2rem', (x: number) => (x * 0.7) / 2)});

  cursor: pointer;
  bottom: 2.5rem;
  ${rectangle('72px', '53px', 0.7)}
  ${backgroundCover(imgArrow)}

  animation-name: ${bouncedAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in;

  ${props =>
      media(
          {
              lg: 'display: block;',
              md: 'display: block;',
              all: 'display: none;',
          },
          props.theme.grid,
      )}
`;
