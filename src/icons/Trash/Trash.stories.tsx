import { Meta, StoryFn } from "@storybook/react";

import Trash from "./Trash";

export default {
  title: "icons/Trash",
  component: Trash,
} as Meta<typeof Trash>;

const Template: StoryFn<typeof Trash> = (args) => <Trash {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
