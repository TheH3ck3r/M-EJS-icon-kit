import { Meta, StoryFn } from "@storybook/react";

import Forward from "./Forward";

export default {
  title: "icons/Forward",
  component: Forward,
} as Meta<typeof Forward>;

const Template: StoryFn<typeof Forward> = (args) => <Forward {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
