import { Meta, StoryFn } from "@storybook/react";

import NoConnection from "./NoConnection";

export default {
  title: "icons/NoConnection",
  component: NoConnection,
} as Meta<typeof NoConnection>;

const Template: StoryFn<typeof NoConnection> = (args) => (
  <NoConnection {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
