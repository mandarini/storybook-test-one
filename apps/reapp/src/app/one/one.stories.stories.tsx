import { Story, Meta } from '@storybook/react';
import { Template } from './one.stories';

export default {
  component: Template,
  title: 'Template',
} as Meta;

const Template: Story = (args) => <Template {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
