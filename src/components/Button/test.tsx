import { screen } from '@testing-library/react';
import { AddShoppingCart } from 'styled-icons/material-outlined';
import 'jest-styled-components';

import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import Button from '.';

describe('<Button/>', () => {
  it('should render medium button by default', () => {
    const { container } = renderWithTheme(<Button>Won Games</Button>);

    expect(screen.getByRole('button', { name: /won games/i })).toHaveStyle({
      height: '4rem',
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`,
      'font-size': theme.font.sizes.small
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render small button when size is passed', () => {
    renderWithTheme(<Button size="small">Won Games</Button>);

    expect(screen.getByRole('button', { name: /won games/i })).toHaveStyle({
      height: '3rem',
      padding: theme.spacings.xxsmall,
      'font-size': theme.font.sizes.xsmall
    });
  });

  it('should render large button when size is passed', () => {
    renderWithTheme(<Button size="large">Won Games</Button>);

    expect(screen.getByRole('button', { name: /won games/i })).toHaveStyle({
      height: '5rem',
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`,
      'font-size': theme.font.sizes.medium
    });
  });

  it('should render full width button', () => {
    renderWithTheme(<Button fullWidth>Won Games</Button>);

    expect(screen.getByRole('button', { name: /won games/i })).toHaveStyle({
      width: '100%'
    });
  });

  it('should render an icon button', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Won Games</Button>
    );

    expect(screen.getByText(/won games/i)).toBeInTheDocument();
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
  });

  it('should render an link button', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Won Games
      </Button>
    );

    expect(screen.getByRole('link', { name: /won games/i })).toHaveAttribute(
      'href',
      '/link'
    );
  });
});
