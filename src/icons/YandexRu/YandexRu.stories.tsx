import { Meta, StoryFn } from "@storybook/react";

import YandexRu from "./YandexRu";

export default {
  title: "icons/YandexRu",
  component: YandexRu,
} as Meta<typeof YandexRu>;

const Template: StoryFn<typeof YandexRu> = (args) => <YandexRu {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
