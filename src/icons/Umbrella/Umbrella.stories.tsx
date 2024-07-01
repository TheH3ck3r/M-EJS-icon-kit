import { Meta, StoryFn } from "@storybook/react";

import Umbrella from "./Umbrella";

export default {
  title: "icons/Umbrella",
  component: Umbrella,
} as Meta<typeof Umbrella>;

const Template: StoryFn<typeof Umbrella> = (args) => <Umbrella {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
