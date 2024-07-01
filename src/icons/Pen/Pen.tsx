import { IconProps } from "types/icon";

const Pen = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4051 8.12055L15.824 2.59726L17.6625 0.756164C18.1659 0.252055 18.7844 0 19.518 0C20.2517 0 20.8697 0.252055 21.3722 0.756164L23.2107 2.59726C23.7141 3.10137 23.9767 3.70981 23.9986 4.42258C24.0205 5.13534 23.7798 5.74334 23.2764 6.24658L21.4051 8.12055ZM19.5009 10.0603L5.58108 24H0V18.411L13.9199 4.47123L19.5009 10.0603Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Pen;
