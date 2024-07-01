import { Decorator, Preview } from "@storybook/react";
import React from "react";
import { useEffect } from "react";
import "../src/styles/global.scss"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  theme: {
    default: "light",
    selector: "body",
    themes: [
      {
        id: "light",
        title: "Light",
        class: "light",
        color: "#fff",
      },
      {
        id: "dark",
        title: "Dark",
        class: "dark",
        color: "#000",
      },
    ],
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      // The icon for the toolbar item
      icon: "circlehollow",
      // Array of options
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

const withThemeProvider: Decorator = (Story, context) => {
  const theme = context.globals.theme;
  useEffect(() => {
    document.body.classList.value = "";
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);
  return <Story />;
};

const preview: Preview = {
  decorators: [withThemeProvider],
};

export default preview;