import { Meta, StoryFn } from "@storybook/react";

import Repeat from "./Repeat";

export default {
  title: "icons/Repeat",
  component: Repeat,
} as Meta<typeof Repeat>;

const Template: StoryFn<typeof Repeat> = (args) => <Repeat {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
