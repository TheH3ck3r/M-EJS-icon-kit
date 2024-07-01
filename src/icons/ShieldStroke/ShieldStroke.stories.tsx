import { Meta, StoryFn } from "@storybook/react";

import ShieldStroke from "./ShieldStroke";

export default {
  title: "icons/ShieldStroke",
  component: ShieldStroke,
} as Meta<typeof ShieldStroke>;

const Template: StoryFn<typeof ShieldStroke> = (args) => (
  <ShieldStroke {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
