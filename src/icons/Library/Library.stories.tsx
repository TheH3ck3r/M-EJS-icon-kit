import { Meta, StoryFn } from "@storybook/react";

import Library from "./Library";

export default {
  title: "icons/Library",
  component: Library,
} as Meta<typeof Library>;

const Template: StoryFn<typeof Library> = (args) => <Library {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
