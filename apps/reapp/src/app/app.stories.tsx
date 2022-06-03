import { Story, Meta } from '@storybook/react';
import { App, AppProps } from './app';

export default {
  component: App,
  title: 'App',
} as Meta;

const Template: Story<AppProps> = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  age: 0,
  happy: false,
};
