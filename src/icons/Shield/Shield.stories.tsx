import { Meta, StoryFn } from "@storybook/react";

import Shield from "./Shield";

export default {
  title: "icons/Shield",
  component: Shield,
} as Meta<typeof Shield>;

const Template: StoryFn<typeof Shield> = (args) => <Shield {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
