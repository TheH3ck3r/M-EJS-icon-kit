import { Meta, StoryFn } from "@storybook/react";

import Sun from "./Sun";

export default {
  title: "icons/Sun",
  component: Sun,
} as Meta<typeof Sun>;

const Template: StoryFn<typeof Sun> = (args) => <Sun {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
