import { Meta, StoryFn } from "@storybook/react";

import Alert from "./Alert";

export default {
  title: "icons/Alert",
  component: Alert,
} as Meta<typeof Alert>;

const Template: StoryFn<typeof Alert> = (args) => <Alert {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
