import { Meta, StoryFn } from "@storybook/react";

import RubCircle from "./RubCircle";

export default {
  title: "icons/RubCircle",
  component: RubCircle,
} as Meta<typeof RubCircle>;

const Template: StoryFn<typeof RubCircle> = (args) => <RubCircle {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
