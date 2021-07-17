import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

describe('<Banner/>', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Banner
        img="https://www.google.com"
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
});
