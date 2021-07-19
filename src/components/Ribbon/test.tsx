import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import theme from 'styles/theme';

import Ribbon from '.';

describe('<Ribbon/>', () => {
  it('should render the text correctly', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with primary color', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: theme.colors.primary
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with secondary color', () => {
    const { container } = renderWithTheme(
      <Ribbon color="secondary">Best Seller</Ribbon>
    );

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with size normal', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: theme.font.sizes.small
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with size small', () => {
    const { container } = renderWithTheme(
      <Ribbon size="small">Best Seller</Ribbon>
    );

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: theme.font.sizes.xsmall
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
