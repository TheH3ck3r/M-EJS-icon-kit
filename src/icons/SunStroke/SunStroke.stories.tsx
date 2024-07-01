import { Meta, StoryFn } from "@storybook/react";

import SunStroke from "./SunStroke";

export default {
  title: "icons/SunStroke",
  component: SunStroke,
} as Meta<typeof SunStroke>;

const Template: StoryFn<typeof SunStroke> = (args) => <SunStroke {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
