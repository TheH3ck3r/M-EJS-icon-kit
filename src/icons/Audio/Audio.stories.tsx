import { Meta, StoryFn } from "@storybook/react";

import Audio from "./Audio";

export default {
  title: "icons/Audio",
  component: Audio,
} as Meta<typeof Audio>;

const Template: StoryFn<typeof Audio> = (args) => <Audio {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
