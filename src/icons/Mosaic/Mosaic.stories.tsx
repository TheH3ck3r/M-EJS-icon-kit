import { Meta, StoryFn } from "@storybook/react";

import Mosaic from "./Mosaic";

export default {
  title: "icons/Mosaic",
  component: Mosaic,
} as Meta<typeof Mosaic>;

const Template: StoryFn<typeof Mosaic> = (args) => <Mosaic {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
