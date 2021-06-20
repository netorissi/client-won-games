import { Story, Meta } from '@storybook/react/types-6-0';

import MediaMatch, { MediaMatchPros } from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta;

export const Desktop: Story<MediaMatchPros> = (args) => (
  <MediaMatch greaterThan="medium" {...args}>
    Only on Desktop
  </MediaMatch>
);

export const Mobile: Story<MediaMatchPros> = (args) => (
  <MediaMatch lessThan="medium" {...args}>
    Only on Mobile
  </MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};
