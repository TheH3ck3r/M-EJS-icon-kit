import { Meta, StoryFn } from "@storybook/react";

import Cube from "./Cube";

export default {
  title: "icons/Cube",
  component: Cube,
} as Meta<typeof Cube>;

const Template: StoryFn<typeof Cube> = (args) => <Cube {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
