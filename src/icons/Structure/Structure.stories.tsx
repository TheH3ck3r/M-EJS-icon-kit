import { Meta, StoryFn } from "@storybook/react";

import Structure from "./Structure";

export default {
  title: "icons/Structure",
  component: Structure,
} as Meta<typeof Structure>;

const Template: StoryFn<typeof Structure> = (args) => <Structure {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
