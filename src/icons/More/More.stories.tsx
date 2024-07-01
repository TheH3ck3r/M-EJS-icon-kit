import { Meta, StoryFn } from "@storybook/react";

import More from "./More";

export default {
  title: "icons/More",
  component: More,
} as Meta<typeof More>;

const Template: StoryFn<typeof More> = (args) => <More {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
