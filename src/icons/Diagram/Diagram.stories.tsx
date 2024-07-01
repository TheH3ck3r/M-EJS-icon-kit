import { Meta, StoryFn } from "@storybook/react";

import Diagram from "./Diagram";

export default {
  title: "icons/Diagram",
  component: Diagram,
} as Meta<typeof Diagram>;

const Template: StoryFn<typeof Diagram> = (args) => <Diagram {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
