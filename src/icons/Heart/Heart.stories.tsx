import { Meta, StoryFn } from "@storybook/react";

import Heart from "./Heart";

export default {
  title: "icons/Heart",
  component: Heart,
} as Meta<typeof Heart>;

const Template: StoryFn<typeof Heart> = (args) => <Heart {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
