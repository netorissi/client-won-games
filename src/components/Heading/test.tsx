import { screen } from '@testing-library/react';

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
    renderWithTheme(
      <Heading lineLeft lineColor="secondary">
        Won Games
      </Heading>
    );

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

  it('should render white heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': theme.font.sizes.medium
    });

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    );
  });

  it('should render white heading with a primary color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /won games/i });

    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    });

    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    );
  });

  it('should render white heading with a secondary color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /won games/i });

    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    });

    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after'
      }
    );
  });
});
