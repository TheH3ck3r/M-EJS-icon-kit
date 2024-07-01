import { IconProps } from "types/icon";

const Equalizer = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 24C2.175 24 1.469 23.7065 0.882 23.1195C0.294 22.5315 0 21.825 0 21V15C0 14.175 0.294 13.4685 0.882 12.8805C1.469 12.2935 2.175 12 3 12C3.825 12 4.531 12.2935 5.118 12.8805C5.706 13.4685 6 14.175 6 15V21C6 21.825 5.706 22.5315 5.118 23.1195C4.531 23.7065 3.825 24 3 24ZM12 24C11.175 24 10.469 23.7065 9.882 23.1195C9.294 22.5315 9 21.825 9 21V3C9 2.175 9.294 1.469 9.882 0.882C10.469 0.294 11.175 0 12 0C12.825 0 13.5315 0.294 14.1195 0.882C14.7065 1.469 15 2.175 15 3V21C15 21.825 14.7065 22.5315 14.1195 23.1195C13.5315 23.7065 12.825 24 12 24ZM21 24C20.175 24 19.4685 23.7065 18.8805 23.1195C18.2935 22.5315 18 21.825 18 21V10.5C18 9.675 18.2935 8.9685 18.8805 8.3805C19.4685 7.7935 20.175 7.5 21 7.5C21.825 7.5 22.5315 7.7935 23.1195 8.3805C23.7065 8.9685 24 9.675 24 10.5V21C24 21.825 23.7065 22.5315 23.1195 23.1195C22.5315 23.7065 21.825 24 21 24Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Equalizer;
