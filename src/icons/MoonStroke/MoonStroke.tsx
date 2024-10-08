import { IconProps } from "types/icon";

const MoonStroke = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.49333 3.34667C8.25333 4.2 8.13333 5.09333 8.13333 6C8.13333 11.44 12.56 15.8667 18 15.8667C18.9067 15.8667 19.8 15.7467 20.6533 15.5067C19.2667 18.92 15.9067 21.3333 12 21.3333C6.85333 21.3333 2.66667 17.1467 2.66667 12C2.66667 8.09333 5.08 4.73333 8.49333 3.34667ZM12 0C5.37333 0 0 5.37333 0 12C0 18.6267 5.37333 24 12 24C18.6267 24 24 18.6267 24 12C24 11.3867 23.9467 10.7733 23.8667 10.1867C22.56 12.0133 20.4267 13.2 18 13.2C14.0267 13.2 10.8 9.97333 10.8 6C10.8 3.58667 11.9867 1.44 13.8133 0.133333C13.2267 0.0533332 12.6133 0 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MoonStroke;
