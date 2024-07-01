import { Meta, StoryFn } from "@storybook/react";

import Table from "./Table";

export default {
  title: "icons/Table",
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
