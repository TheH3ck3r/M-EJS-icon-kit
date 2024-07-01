import { Meta, StoryFn } from "@storybook/react";

import Adev from "./Adev";

export default {
  title: "icons/Adev",
  component: Adev,
} as Meta<typeof Adev>;

const Template: StoryFn<typeof Adev> = (args) => <Adev {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
