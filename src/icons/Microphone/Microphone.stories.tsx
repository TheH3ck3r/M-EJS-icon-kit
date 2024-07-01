import { Meta, StoryFn } from "@storybook/react";

import Microphone from "./Microphone";

export default {
  title: "icons/Microphone",
  component: Microphone,
} as Meta<typeof Microphone>;

const Template: StoryFn<typeof Microphone> = (args) => <Microphone {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
