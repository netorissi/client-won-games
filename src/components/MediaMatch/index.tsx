import { DefaultBreakpoints } from 'styled-media-query';

import * as S from './styles';

export type Breakpoint = keyof DefaultBreakpoints;

export type MediaMatchPros = {
  children: React.ReactNode;
  lessThan?: Breakpoint;
  greaterThan?: Breakpoint;
};

const MediaMatch = ({ children, greaterThan, lessThan }: MediaMatchPros) => (
  <S.Wrapper greaterThan={greaterThan} lessThan={lessThan}>
    {children}
  </S.Wrapper>
);

export default MediaMatch;
