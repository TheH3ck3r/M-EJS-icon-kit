import { Meta, StoryFn } from "@storybook/react";

import Help from "./Help";

export default {
  title: "icons/Help",
  component: Help,
} as Meta<typeof Help>;

const Template: StoryFn<typeof Help> = (args) => <Help {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
