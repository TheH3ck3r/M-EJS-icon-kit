import { Meta, StoryFn } from "@storybook/react";

import Copy from "./Copy";

export default {
  title: "icons/Copy",
  component: Copy,
} as Meta<typeof Copy>;

const Template: StoryFn<typeof Copy> = (args) => <Copy {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
