import { Meta, StoryFn } from "@storybook/react";

import Ban from "./Ban";

export default {
  title: "icons/Ban",
  component: Ban,
} as Meta<typeof Ban>;

const Template: StoryFn<typeof Ban> = (args) => <Ban {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
