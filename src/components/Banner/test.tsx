import { screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

describe('<Banner/>', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Banner
        img="https://cdn.cardsrealm.com/images/cartas/crop/avr-avacyn-restored/defy-death-16-med.jpeg?1215"
        title="Won Games"
        subtitle="Subtitle"
        buttonLabel="Buy Now"
        buttonLink="https://www.google.com"
      />
    );

    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Subtitle/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /Won Games/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should reander a Ribbon', () => {
    renderWithTheme(
      <Banner
        img="https://cdn.cardsrealm.com/images/cartas/crop/avr-avacyn-restored/defy-death-16-med.jpeg?1215"
        title="Won Games"
        subtitle="Subtitle"
        buttonLabel="Buy Now"
        buttonLink="https://www.google.com"
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbon = screen.getByText(/My Ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ background: theme.colors.secondary });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: theme.font.sizes.xsmall
    });
  });
});
