import { IconProps } from "types/icon";

const Heart = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 23L11.5385 22.7223C11.0662 22.4445 0 15.7729 0 8.63467C0 4.97676 2.89908 2 6.46152 2C8.80884 2 10.8678 3.29216 12 5.2211C13.1322 3.29216 15.1912 2 17.5385 2C21.1009 2 24 4.97676 24 8.63467C24 15.7729 12.9338 22.4445 12.4615 22.7223L12 23Z"
        fill="#F5523A"
      />
    </svg>
  );
};

export default Heart;
