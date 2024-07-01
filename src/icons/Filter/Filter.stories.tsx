import { Meta, StoryFn } from "@storybook/react";

import Filter from "./Filter";

export default {
  title: "icons/Filter",
  component: Filter,
} as Meta<typeof Filter>;

const Template: StoryFn<typeof Filter> = (args) => <Filter {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
