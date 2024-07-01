import { Meta, StoryFn } from "@storybook/react";

import Unlock from "./Unlock";

export default {
  title: "icons/Unlock",
  component: Unlock,
} as Meta<typeof Unlock>;

const Template: StoryFn<typeof Unlock> = (args) => <Unlock {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
