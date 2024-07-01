import { Meta, StoryFn } from "@storybook/react";

import Tag from "./Tag";

export default {
  title: "icons/Tag",
  component: Tag,
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args) => <Tag {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
