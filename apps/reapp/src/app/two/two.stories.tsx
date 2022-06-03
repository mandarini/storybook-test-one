import { Story, Meta } from '@storybook/react';
import { Tag } from './two';

export default {
  component: Tag,
  title: 'Tag',
} as Meta;

const Template: Story = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
