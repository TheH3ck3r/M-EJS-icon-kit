import { Meta, StoryFn } from "@storybook/react";

import Export from "./Export";

export default {
  title: "icons/Export",
  component: Export,
} as Meta<typeof Export>;

const Template: StoryFn<typeof Export> = (args) => <Export {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
