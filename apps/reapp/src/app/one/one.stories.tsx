import { Story, Meta } from '@storybook/react';
import { One, OneProps } from './one';

export default {
  component: One,
  title: 'One',
} as Meta;

const Template: Story<OneProps> = (args) => <One {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  age: 0,
  happy: false,
};
