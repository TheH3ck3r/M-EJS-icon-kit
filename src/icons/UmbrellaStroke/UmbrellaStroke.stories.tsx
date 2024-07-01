import { Meta, StoryFn } from "@storybook/react";

import UmbrellaStroke from "./UmbrellaStroke";

export default {
  title: "icons/UmbrellaStroke",
  component: UmbrellaStroke,
} as Meta<typeof UmbrellaStroke>;

const Template: StoryFn<typeof UmbrellaStroke> = (args) => (
  <UmbrellaStroke {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
