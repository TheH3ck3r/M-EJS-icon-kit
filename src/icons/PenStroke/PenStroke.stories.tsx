import { Meta, StoryFn } from "@storybook/react";

import PenStroke from "./PenStroke";

export default {
  title: "icons/PenStroke",
  component: PenStroke,
} as Meta<typeof PenStroke>;

const Template: StoryFn<typeof PenStroke> = (args) => <PenStroke {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
