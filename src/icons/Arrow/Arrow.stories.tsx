import { Meta, StoryFn } from "@storybook/react";

import Arrow from "./Arrow";

export default {
  title: "icons/Arrow",
  component: Arrow,
} as Meta<typeof Arrow>;

const Template: StoryFn<typeof Arrow> = (args) => <Arrow {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
