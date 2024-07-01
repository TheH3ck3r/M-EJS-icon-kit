import { IconProps } from "types/icon";

const Book = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.65901 0.702944C3.23705 1.15303 3 1.76348 3 2.4V21.6C3 22.86 4.06875 24 5.25 24H18.75C19.9312 24 21 22.86 21 21.6V2.4C21 1.14 19.9312 0 18.75 0H17.625V8.4L14.8125 6.6L12 8.4V0H5.25C4.65326 0 4.08097 0.252856 3.65901 0.702944Z"
        fill="currntColor"
      />
    </svg>
  );
};

export default Book;
