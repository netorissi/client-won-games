import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('<Menu/>', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
  });

  it('should render the open/close menu mobile', () => {
    renderWithTheme(<Menu />);

    const fullMenu = screen.getByRole('navigation', { hidden: true });

    expect(fullMenu.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenu).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenu.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenu).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenu).toHaveStyle({ opacity: 0 });
  });

  it('should show register when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText(/login now/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  it('should show box logged when logged in', () => {
    renderWithTheme(<Menu username="test" />);

    expect(screen.queryByText(/account/i)).toBeInTheDocument();
    expect(screen.queryByText(/wishlist/i)).toBeInTheDocument();
    expect(screen.queryByText(/login now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });
});
