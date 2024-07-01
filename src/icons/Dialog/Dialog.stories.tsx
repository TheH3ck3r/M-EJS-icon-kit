import { Meta, StoryFn } from "@storybook/react";

import Dialog from "./Dialog";

export default {
  title: "icons/Dialog",
  component: Dialog,
} as Meta<typeof Dialog>;

const Template: StoryFn<typeof Dialog> = (args) => <Dialog {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
