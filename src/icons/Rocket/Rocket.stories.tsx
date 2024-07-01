import { Meta, StoryFn } from "@storybook/react";

import Rocket from "./Rocket";

export default {
  title: "icons/Rocket",
  component: Rocket,
} as Meta<typeof Rocket>;

const Template: StoryFn<typeof Rocket> = (args) => <Rocket {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
