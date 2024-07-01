import { Meta, StoryFn } from "@storybook/react";

import Github from "./Github";

export default {
  title: "icons/Github",
  component: Github,
} as Meta<typeof Github>;

const Template: StoryFn<typeof Github> = (args) => <Github {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
