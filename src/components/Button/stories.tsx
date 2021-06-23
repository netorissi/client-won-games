import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from 'styled-icons/material-outlined';

import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: 'Buy now',
  icon: undefined
};

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />
};