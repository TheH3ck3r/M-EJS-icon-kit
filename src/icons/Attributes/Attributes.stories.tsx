import { Meta, StoryFn } from "@storybook/react";

import Attributes from "./Attributes";

export default {
  title: "icons/Attributes",
  component: Attributes,
} as Meta<typeof Attributes>;

const Template: StoryFn<typeof Attributes> = (args) => <Attributes {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 38,
};
