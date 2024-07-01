import { Meta, StoryFn } from "@storybook/react";

import Power from "./Power";

export default {
  title: "icons/Power",
  component: Power,
} as Meta<typeof Power>;

const Template: StoryFn<typeof Power> = (args) => <Power {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
