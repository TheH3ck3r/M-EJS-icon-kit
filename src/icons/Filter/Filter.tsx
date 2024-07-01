import { IconProps } from "types/icon";

const Filter = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7477 0H2.25267C0.254014 0 -0.754407 2.42489 0.661685 3.84098L8.24999 11.432V19.5C8.24999 20.2082 8.58341 20.8751 9.14999 21.375L12.15 23.5812C13.6159 24.6057 15.75 23.6533 15.75 21.7812V11.432L23.3387 3.84098C24.7519 2.42775 23.7504 0 21.7477 0ZM13.5 10.5V21.75L10.5 19.5V10.5L2.25 2.25H21.75L13.5 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Filter;
