import { Meta, StoryFn } from "@storybook/react";

import Focus from "./Focus";

export default {
  title: "icons/Focus",
  component: Focus,
} as Meta<typeof Focus>;

const Template: StoryFn<typeof Focus> = (args) => <Focus {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
