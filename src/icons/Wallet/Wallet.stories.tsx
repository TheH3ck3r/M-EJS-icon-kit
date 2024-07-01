import { Meta, StoryFn } from "@storybook/react";

import Wallet from "./Wallet";

export default {
  title: "icons/Wallet",
  component: Wallet,
} as Meta<typeof Wallet>;

const Template: StoryFn<typeof Wallet> = (args) => <Wallet {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
