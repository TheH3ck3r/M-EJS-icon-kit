import { IconProps } from "types/icon";

const Card = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6 3H2.4C1.068 3 0.012 4.00125 0.012 5.25L0 18.75C0 19.3467 0.252856 19.919 0.702944 20.341C1.15303 20.7629 1.76348 21 2.4 21H21.6C22.2365 21 22.847 20.7629 23.2971 20.341C23.7471 19.919 24 19.3467 24 18.75V5.25C24 4.65326 23.7471 4.08097 23.2971 3.65901C22.847 3.23705 22.2365 3 21.6 3ZM21.6 18.75H2.4V12H21.6V18.75ZM21.6 7.5H2.4V5.25H21.6V7.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Card;
