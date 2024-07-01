import { Meta, StoryFn } from "@storybook/react";

import Pen from "./Pen";

export default {
  title: "icons/Pen",
  component: Pen,
} as Meta<typeof Pen>;

const Template: StoryFn<typeof Pen> = (args) => <Pen {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
