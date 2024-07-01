import { Meta, StoryFn } from "@storybook/react";

import Infinity from "./Infinity";

export default {
  title: "icons/Infinity",
  component: Infinity,
} as Meta<typeof Infinity>;

const Template: StoryFn<typeof Infinity> = (args) => <Infinity {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
