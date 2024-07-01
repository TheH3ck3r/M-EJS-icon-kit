import { Meta, StoryFn } from "@storybook/react";

import Fire from "./Fire";

export default {
  title: "icons/Fire",
  component: Fire,
} as Meta<typeof Fire>;

const Template: StoryFn<typeof Fire> = (args) => <Fire {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
