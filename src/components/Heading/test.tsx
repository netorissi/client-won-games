import { screen } from '@testing-library/react';
import 'jest-styled-components';

import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import Heading from '.';

describe('<Heading/>', () => {
  it('should render black heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.black
    });
  });

  it('should render white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.white
    });
  });

  it('should render white heading with line left', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    });
  });

  it('should render white heading with line bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    );
  });
});
