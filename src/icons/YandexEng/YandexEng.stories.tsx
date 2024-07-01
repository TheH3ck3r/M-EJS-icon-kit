import { Meta, StoryFn } from "@storybook/react";

import YandexEng from "./YandexEng";

export default {
  title: "icons/YandexEng",
  component: YandexEng,
} as Meta<typeof YandexEng>;

const Template: StoryFn<typeof YandexEng> = (args) => <YandexEng {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
