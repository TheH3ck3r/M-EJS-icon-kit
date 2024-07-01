import { Meta, StoryFn } from "@storybook/react";

import Bell from "./Bell";

export default {
  title: "icons/Bell",
  component: Bell,
} as Meta<typeof Bell>;

const Template: StoryFn<typeof Bell> = (args) => <Bell {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
