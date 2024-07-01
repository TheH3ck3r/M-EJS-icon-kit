import { IconProps } from "types/icon";

const Adev = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5041 0.371164L0.0973129 23.4012C-0.150709 23.9018 0.0972449 24.1521 0.593259 23.9018L19.4392 14.3894L12.496 0.371163C12.248 -0.129483 11.7463 -0.117926 11.5041 0.371164Z"
        fill="#FF5E00"
      />
      <path
        d="M12 18.1443L19.4392 14.3894L23.9027 23.4011C24.1507 23.9018 23.9027 24.1521 23.4068 23.9018L12 18.1443Z"
        fill="#EE1415"
      />
    </svg>
  );
};

export default Adev;
