import { Meta, StoryFn } from "@storybook/react";

import History from "./History";

export default {
  title: "icons/History",
  component: History,
} as Meta<typeof History>;

const Template: StoryFn<typeof History> = (args) => (
  <History {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
