import { Meta, StoryFn } from "@storybook/react";

import DocumentStroke from "./DocumentStroke";

export default {
  title: "icons/DocumentStroke",
  component: DocumentStroke,
} as Meta<typeof DocumentStroke>;

const Template: StoryFn<typeof DocumentStroke> = (args) => (
  <DocumentStroke {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
