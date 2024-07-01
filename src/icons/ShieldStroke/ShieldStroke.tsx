import { IconProps } from "types/icon";

const ShieldStroke = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.72885 19.9913C7.82296 22.3655 10.5974 24 12 24C13.4026 24 16.1771 22.3655 18.2711 19.9913C21.2396 16.6258 23 11.9617 23 5.99949C23 5.50878 22.6957 5.0675 22.2316 4.88528C18.2303 3.31416 15.0438 1.75008 12.678 0.201537C12.2674 -0.067179 11.7326 -0.067179 11.322 0.201537C8.9562 1.75008 5.76977 3.31416 1.76839 4.88528C1.30431 5.0675 1 5.50878 1 5.99949C1 11.9617 2.76032 16.6258 5.72885 19.9913ZM12 21.6C11.4268 21.6 9.25066 20.318 7.57671 18.4201C5.12413 15.6396 3.60311 11.7967 3.45617 6.80343C6.89041 5.41967 9.73718 4.0302 12 2.6298C14.2628 4.0302 17.1096 5.41967 20.5438 6.80343C20.3969 11.7967 18.8759 15.6396 16.4233 18.4201C14.7494 20.318 12.5732 21.6 12 21.6Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ShieldStroke;
