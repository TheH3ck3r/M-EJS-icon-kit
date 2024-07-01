import { Meta, StoryFn } from "@storybook/react";

import Fastfood from "./Fastfood";

export default {
  title: "icons/Fastfood",
  component: Fastfood,
} as Meta<typeof Fastfood>;

const Template: StoryFn<typeof Fastfood> = (args) => <Fastfood {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
