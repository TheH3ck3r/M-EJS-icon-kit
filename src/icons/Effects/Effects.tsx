import { IconProps } from "types/icon";

const Effects = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6364 8.72727L18.2727 5.72727L15.2727 4.36364L18.2727 3L19.6364 0L21 3L24 4.36364L21 5.72727L19.6364 8.72727ZM19.6364 24L18.2727 21L15.2727 19.6364L18.2727 18.2727L19.6364 15.2727L21 18.2727L24 19.6364L21 21L19.6364 24ZM8.72727 20.7273L6 14.7273L0 12L6 9.27273L8.72727 3.27273L11.4545 9.27273L17.4545 12L11.4545 14.7273L8.72727 20.7273Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Effects;
