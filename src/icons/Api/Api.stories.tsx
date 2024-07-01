import { Meta, StoryFn } from "@storybook/react";

import Api from "./Api";

export default {
  title: "icons/Api",
  component: Api,
} as Meta<typeof Api>;

const Template: StoryFn<typeof Api> = (args) => <Api {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
