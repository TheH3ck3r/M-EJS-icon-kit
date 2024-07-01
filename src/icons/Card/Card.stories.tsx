import { Meta, StoryFn } from "@storybook/react";

import Card from "./Card";

export default {
  title: "icons/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
