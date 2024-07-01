import { Meta, StoryFn } from "@storybook/react";

import Document from "./Document";

export default {
  title: "icons/Document",
  component: Document,
} as Meta<typeof Document>;

const Template: StoryFn<typeof Document> = (args) => <Document {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
