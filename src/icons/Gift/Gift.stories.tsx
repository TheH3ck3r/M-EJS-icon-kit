import { Meta, StoryFn } from "@storybook/react";

import Gift from "./Gift";

export default {
  title: "icons/Gift",
  component: Gift,
} as Meta<typeof Gift>;

const Template: StoryFn<typeof Gift> = (args) => <Gift {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
