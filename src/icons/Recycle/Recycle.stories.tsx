import { Meta, StoryFn } from "@storybook/react";

import Recycle from "./Recycle";

export default {
  title: "icons/Recycle",
  component: Recycle,
} as Meta<typeof Recycle>;

const Template: StoryFn<typeof Recycle> = (args) => <Recycle {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
