import { Meta, StoryFn } from "@storybook/react";

import QrCodeV2 from "./QrCodeV2";

export default {
  title: "icons/QrCodeV2",
  component: QrCodeV2,
} as Meta<typeof QrCodeV2>;

const Template: StoryFn<typeof QrCodeV2> = (args) => <QrCodeV2 {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
