import { Meta, StoryFn } from "@storybook/react";

import Mail from "./Mail";

export default {
  title: "icons/Mail",
  component: Mail,
} as Meta<typeof Mail>;

const Template: StoryFn<typeof Mail> = (args) => <Mail {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
