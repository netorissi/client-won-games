import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps, LineColors } from '.';

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  primary: (theme: DefaultTheme) => css`
    &::after {
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    &::after {
      border-bottom: 0.5rem solid ${theme.colors.secondary};
    }
  `,
  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineColor, lineLeft, lineBottom, size }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)};
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`;
