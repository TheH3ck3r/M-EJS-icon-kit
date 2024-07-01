import { IconProps } from "types/icon";

const Moon = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.37333 0 0 5.37333 0 12C0 18.6267 5.37333 24 12 24C18.6267 24 24 18.6267 24 12C24 11.3867 23.9467 10.7733 23.8667 10.1867C22.56 12.0133 20.4267 13.2 18 13.2C14.0267 13.2 10.8 9.97333 10.8 6C10.8 3.58667 11.9867 1.44 13.8133 0.133333C13.2267 0.0533332 12.6133 0 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Moon;
