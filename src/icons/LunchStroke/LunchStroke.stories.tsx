import { Meta, StoryFn } from "@storybook/react";

import LunchStroke from "./LunchStroke";

export default {
  title: "icons/LunchStroke",
  component: LunchStroke,
} as Meta<typeof LunchStroke>;

const Template: StoryFn<typeof LunchStroke> = (args) => (
  <LunchStroke {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
