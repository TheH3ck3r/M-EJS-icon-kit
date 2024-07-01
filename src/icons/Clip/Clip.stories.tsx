import { Meta, StoryFn } from "@storybook/react";

import Clip from "./Clip";

export default {
  title: "icons/Clip",
  component: Clip,
} as Meta<typeof Clip>;

const Template: StoryFn<typeof Clip> = (args) => <Clip {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
