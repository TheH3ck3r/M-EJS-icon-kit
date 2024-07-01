import { Meta, StoryFn } from "@storybook/react";

import Moon from "./Moon";

export default {
  title: "icons/Moon",
  component: Moon,
} as Meta<typeof Moon>;

const Template: StoryFn<typeof Moon> = (args) => <Moon {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
