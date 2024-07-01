import { Meta, StoryFn } from "@storybook/react";

import Showcase from "./Showcase";

export default {
  title: "icons/Showcase",
  component: Showcase,
} as Meta<typeof Showcase>;

const Template: StoryFn<typeof Showcase> = (args) => <Showcase {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
