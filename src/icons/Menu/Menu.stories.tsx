import { Meta, StoryFn } from "@storybook/react";

import Menu from "./Menu";

export default {
  title: "icons/Menu",
  component: Menu,
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
