import { Story, Meta } from '@storybook/react';
import { Relib, RelibProps } from './relib';

export default {
  component: Relib,
  title: 'Relib',
} as Meta;

const Template: Story<RelibProps> = (args) => <Relib {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  age: 0,
  happy: false,
};
