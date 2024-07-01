import { IconProps } from "types/icon";

const Ban = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.37261 0 0 5.37256 0 12C0 18.6274 5.37261 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37261 18.6274 0 12 0ZM18.2955 5.70445C21.4624 8.87129 21.6826 13.7116 19.296 17.1062L6.89371 4.704C10.2907 2.31581 15.1305 2.5394 18.2955 5.70445ZM5.70445 18.2955C2.53761 15.1287 2.31735 10.2884 4.70395 6.89376L17.1063 19.296C13.7094 21.6842 8.86955 21.4606 5.70445 18.2955Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Ban;
