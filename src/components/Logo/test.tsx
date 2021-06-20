import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import Logo from '.';

describe('<Logo/>', () => {
  it('should render white color by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.white
    });
  });

  it('should render black color when color is passed', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.black
    });
  });
});
