import { Meta, StoryFn } from "@storybook/react";

import Speed from "./Speed";

export default {
  title: "icons/Speed",
  component: Speed,
} as Meta<typeof Speed>;

const Template: StoryFn<typeof Speed> = (args) => <Speed {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
