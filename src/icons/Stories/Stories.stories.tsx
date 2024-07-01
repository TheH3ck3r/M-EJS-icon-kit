import { Meta, StoryFn } from "@storybook/react";

import Stories from "./Stories";

export default {
  title: "icons/Stories",
  component: Stories,
} as Meta<typeof Stories>;

const Template: StoryFn<typeof Stories> = (args) => <Stories {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
