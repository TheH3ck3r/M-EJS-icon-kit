import { Meta, StoryFn } from "@storybook/react";

import Connection from "./Connection";

export default {
  title: "icons/Connection",
  component: Connection,
} as Meta<typeof Connection>;

const Template: StoryFn<typeof Connection> = (args) => <Connection {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
