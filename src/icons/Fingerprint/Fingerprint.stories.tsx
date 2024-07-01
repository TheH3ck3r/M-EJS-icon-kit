import { Meta, StoryFn } from "@storybook/react";

import Fingerprint from "./Fingerprint";

export default {
  title: "icons/Fingerprint",
  component: Fingerprint,
} as Meta<typeof Fingerprint>;

const Template: StoryFn<typeof Fingerprint> = (args) => (
  <Fingerprint {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
