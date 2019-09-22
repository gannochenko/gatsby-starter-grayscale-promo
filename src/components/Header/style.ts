import styled from 'styled-components';
import Img from 'gatsby-image';
import {
    absoluteCover,
    align,
    group,
    central,
    backgroundCover,
    rectangle,
    op,
    bouncedAnimation,
    grid,
    cell,
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
export const DataContainer = styled.div`
    ${central()}
    ${props =>
        media(
            { md: expandVertically, lg: expandVertically },
            props.theme.grid,
        )}
  padding: 2rem 1rem;
`;

export const DataColumn = styled.div`
    ${align('center', 'left', 'column')}
    width: 100%;
    height: 100%;
    position: relative;
`;

export const HelloBlock = withTheme(styled.div`
    color: ${props => props.theme.color.background};
    ${props =>
        grid(
            { guttersW: { xs: '0', all: '1rem' }, guttersH: { xs: '1.5rem' } },
            props.theme.grid,
        )}
    ${align('center', 'left')}
  width: 100%;
`);

export const HelloLeft = withTheme(styled.div`
    ${props => cell({ xs: 12, all: 4 }, props.theme.grid)}
    ${align('top', 'center')}
`);

export const HelloRight = styled.div`
    ${props => cell({ xs: 12, all: 8 }, props.theme.grid)}
    ${props =>
        media({ xs: align('top', 'center', 'column') }, props.theme.grid)}
`;

export const GreetingBlock = styled.div`
    letter-spacing: 0.05rem;
    ${props => media({ xs: 'text-align: center;' }, props.theme.grid)}
`;

export const NameBlock = styled.div`
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    ${props => media({ xs: 'text-align: center;' }, props.theme.grid)}
`;

export const SocialBar = styled.div`
    ${group(null, '1.5rem')}
    padding-top: 1.5rem;
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
