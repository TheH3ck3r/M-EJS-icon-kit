import { Meta, StoryFn } from "@storybook/react";

import Invisible from "./Invisible";

export default {
  title: "icons/Invisible",
  component: Invisible,
} as Meta<typeof Invisible>;

const Template: StoryFn<typeof Invisible> = (args) => <Invisible {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
