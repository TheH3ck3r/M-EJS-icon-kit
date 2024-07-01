import { Meta, StoryFn } from "@storybook/react";

import Visible from "./Visible";

export default {
  title: "icons/Visible",
  component: Visible,
} as Meta<typeof Visible>;

const Template: StoryFn<typeof Visible> = (args) => <Visible {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
