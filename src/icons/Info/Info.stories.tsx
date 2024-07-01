import { Meta, StoryFn } from "@storybook/react";

import Info from "./Info";

export default {
  title: "icons/Info",
  component: Info,
} as Meta<typeof Info>;

const Template: StoryFn<typeof Info> = (args) => <Info {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
