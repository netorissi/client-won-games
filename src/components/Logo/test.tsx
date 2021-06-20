import { screen } from '@testing-library/react';
import media from 'styled-media-query';
import 'jest-styled-components';

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

  it('should render a normal logo', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    });
  });

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    });
  });

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo size="large" hideOnMobile />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    );
  });
});
