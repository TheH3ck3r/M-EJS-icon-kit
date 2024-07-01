import { Meta, StoryFn } from "@storybook/react";

import Lamp from "./Lamp";

export default {
  title: "icons/Lamp",
  component: Lamp,
} as Meta<typeof Lamp>;

const Template: StoryFn<typeof Lamp> = (args) => <Lamp {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
