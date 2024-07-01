import { Meta, StoryFn } from "@storybook/react";

import Import from "./Import";

export default {
  title: "icons/Import",
  component: Import,
} as Meta<typeof Import>;

const Template: StoryFn<typeof Import> = (args) => <Import {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
