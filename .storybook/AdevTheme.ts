import { create } from "@storybook/theming";

export default create({
  base: "dark",

  colorPrimary: "#ff5e00",
  colorSecondary: "#ee6c4d",

  appBorderRadius: 4,

  // Typography
  fontBase: '"Nunito", sans-serif',
  fontCode: '"JetBrains Mono", monospace',

  // Text colors
  textColor: "rgba(255,255,255,0.9)",
  textInverseColor: "black",

  // Form colors
  inputBg: "#545454",
  inputBorder: "545454",
  inputTextColor: "white",
  inputBorderRadius: 8,

  brandTitle: "Adev Icons",
  brandImage:
    "https://res.cloudinary.com/dixvycrtj/image/upload/v1680463340/AdevIconKitWithLabel_2_hqhnoc.svg",
  brandTarget: "_self",
});
