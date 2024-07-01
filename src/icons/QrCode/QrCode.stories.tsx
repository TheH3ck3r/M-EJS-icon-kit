import { Meta, StoryFn } from "@storybook/react";

import QrCode from "./QrCode";

export default {
  title: "icons/QrCode",
  component: QrCode,
} as Meta<typeof QrCode>;

const Template: StoryFn<typeof QrCode> = (args) => <QrCode {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
