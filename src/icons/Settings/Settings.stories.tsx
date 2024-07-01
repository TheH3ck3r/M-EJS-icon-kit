import { Meta, StoryFn } from "@storybook/react";

import Settings from "./Settings";

export default {
  title: "icons/Settings",
  component: Settings,
} as Meta<typeof Settings>;

const Template: StoryFn<typeof Settings> = (args) => <Settings {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
