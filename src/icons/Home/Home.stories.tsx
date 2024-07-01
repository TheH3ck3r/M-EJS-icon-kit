import { Meta, StoryFn } from "@storybook/react";

import Home from "./Home";

export default {
  title: "icons/Home",
  component: Home,
} as Meta<typeof Home>;

const Template: StoryFn<typeof Home> = (args) => <Home {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
