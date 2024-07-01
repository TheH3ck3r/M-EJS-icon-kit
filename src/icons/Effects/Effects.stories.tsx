import { Meta, StoryFn } from "@storybook/react";

import Effects from "./Effects";

export default {
  title: "icons/Effects",
  component: Effects,
} as Meta<typeof Effects>;

const Template: StoryFn<typeof Effects> = (args) => <Effects {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
