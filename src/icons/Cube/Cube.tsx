import { IconProps } from "types/icon";

const Cube = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9231 21.649L22.1538 16.6154V7.44231L12.9231 10.8029V21.649ZM12 9.17308L22.0673 5.50962L12 1.84615L1.93269 5.50962L12 9.17308ZM24 5.53846V16.6154C24 16.9519 23.9135 17.2644 23.7404 17.5529C23.5673 17.8413 23.3317 18.0673 23.0337 18.2308L12.8798 23.7692C12.6106 23.9231 12.3173 24 12 24C11.6827 24 11.3894 23.9231 11.1202 23.7692L0.966346 18.2308C0.668269 18.0673 0.432692 17.8413 0.259615 17.5529C0.0865385 17.2644 0 16.9519 0 16.6154V5.53846C0 5.15385 0.110577 4.80288 0.331731 4.48558C0.552885 4.16827 0.846154 3.94231 1.21154 3.80769L11.3654 0.115385C11.5769 0.0384615 11.7885 0 12 0C12.2115 0 12.4231 0.0384615 12.6346 0.115385L22.7885 3.80769C23.1538 3.94231 23.4471 4.16827 23.6683 4.48558C23.8894 4.80288 24 5.15385 24 5.53846Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Cube;
