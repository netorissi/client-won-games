import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Breakpoint, MediaMatchPros } from '.';

const modifiers = {
  lessThan: (size: Breakpoint) => css`
    ${media.lessThan(size)` display: block; `};
  `,
  greaterThan: (size: Breakpoint) => css`
    ${media.greaterThan(size)` display: block; `};
  `
};

export const Wrapper = styled.div<MediaMatchPros>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && modifiers.lessThan(lessThan)};
    ${!!greaterThan && modifiers.greaterThan(greaterThan)};
  `}
`;
