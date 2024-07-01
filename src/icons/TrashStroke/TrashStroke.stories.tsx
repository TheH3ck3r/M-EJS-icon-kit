import { Meta, StoryFn } from "@storybook/react";

import TrashStroke from "./TrashStroke";

export default {
  title: "icons/TrashStroke",
  component: TrashStroke,
} as Meta<typeof TrashStroke>;

const Template: StoryFn<typeof TrashStroke> = (args) => (
  <TrashStroke {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
