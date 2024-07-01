import { Meta, StoryFn } from "@storybook/react";

import Smile from "./Smile";

export default {
  title: "icons/Smile",
  component: Smile,
} as Meta<typeof Smile>;

const Template: StoryFn<typeof Smile> = (args) => <Smile {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
