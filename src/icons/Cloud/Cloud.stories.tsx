import { Meta, StoryFn } from "@storybook/react";

import Cloud from "./Cloud";

export default {
  title: "icons/Cloud",
  component: Cloud,
} as Meta<typeof Cloud>;

const Template: StoryFn<typeof Cloud> = (args) => <Cloud {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
