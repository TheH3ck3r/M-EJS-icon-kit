import { Meta, StoryFn } from "@storybook/react";

import HelpStroke from "./HelpStroke";

export default {
  title: "icons/HelpStroke",
  component: HelpStroke,
} as Meta<typeof HelpStroke>;

const Template: StoryFn<typeof HelpStroke> = (args) => <HelpStroke {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
