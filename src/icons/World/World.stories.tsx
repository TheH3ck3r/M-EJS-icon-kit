import { Meta, StoryFn } from "@storybook/react";

import World from "./World";

export default {
  title: "icons/World",
  component: World,
} as Meta<typeof World>;

const Template: StoryFn<typeof World> = (args) => <World {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
