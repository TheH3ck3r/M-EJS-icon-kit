import { Meta, StoryFn } from "@storybook/react";

import Calendar from "./Calendar";

export default {
  title: "icons/Calendar",
  component: Calendar,
} as Meta<typeof Calendar>;

const Template: StoryFn<typeof Calendar> = (args) => <Calendar {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
