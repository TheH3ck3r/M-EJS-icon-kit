import { IconProps } from "types/icon";

const YandexEng = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="#FC3F1D" />
      <path
        d="M13.2675 17.4524V20H10.7499V15.7042L6 5H8.62663L12.3278 13.3741C13.041 14.974 13.2675 15.5305 13.2675 17.4524ZM18 5L14.9122 12.2526H12.3534L15.4412 5H18Z"
        fill="white"
      />
    </svg>
  );
};

export default YandexEng;
