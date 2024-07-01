import { Meta, StoryFn } from "@storybook/react";

import Lock from "./Lock";

export default {
  title: "icons/Lock",
  component: Lock,
} as Meta<typeof Lock>;

const Template: StoryFn<typeof Lock> = (args) => <Lock {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
