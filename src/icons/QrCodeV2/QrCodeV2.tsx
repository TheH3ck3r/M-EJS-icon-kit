import { IconProps } from "types/icon";

const QrCodeV2 = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 6.66667V10.6667H18.6667V12V13.3333H10.6667V12V6.66667H12H13.3333Z"
        fill="currentColor"
      />
      <path
        d="M21.3333 13.3333V10.6667H24V13.3333H21.3333Z"
        fill="currentColor"
      />
      <path
        d="M10.6667 9.04004e-06L13.3333 0V2.66667V4H10.6667V9.04004e-06Z"
        fill="currentColor"
      />
      <path d="M0 12V10.6667H8V12V13.3333L0 13.3333V12Z" fill="currentColor" />
      <path
        d="M16 18.6667H13.3333V24L12 24L10.6667 24V17.3333V16L16 16V17.3333V18.6667Z"
        fill="currentColor"
      />
      <path
        d="M16 21.3333H24V22.6667V24H16V22.6667V21.3333Z"
        fill="currentColor"
      />
      <path
        d="M24 17.3333V18.6667L18.6667 18.6667V17.3333V16H24V17.3333Z"
        fill="currentColor"
      />
      <path
        d="M16 0C16 0 20 0 21.3333 0C22.6667 0 24 0 24 0C24 0 24 4 24 5.33333C24 6.66667 24 8 24 8C24 8 20 8 18.6667 8C17.3333 8 16 8 16 8C16 8 16 4.03857 16 2.66667C16 1.29476 16 0 16 0ZM18.6667 2.66667V5.33333H21.3333V2.66667H18.6667Z"
        fill="currentColor"
      />
      <path
        d="M2.66667 0C4 0 8 0 8 0C8 0 8 1.33333 8 2.66667C8 4 8 4 8 5.33333C8 6.66667 8 8 8 8H0C0 8 0 6.66667 0 5.33333C0 4 0 0 0 0C0 0 1.33333 0 2.66667 0ZM2.66667 2.66667V5.33333H5.33333V2.66667H2.66667Z"
        fill="currentColor"
      />
      <path
        d="M0 16C0 16 4 16 5.33333 16C6.66667 16 8 16 8 16C8 16 8 20 8 21.3333C8 22.6667 8 24 8 24C8 24 4 24 2.66667 24C1.33333 24 0 24 0 24C0 24 2.54314e-06 20.0386 0 18.6667C-2.54313e-06 17.2948 0 16 0 16ZM2.66667 18.6667V21.3333H5.33333V18.6667H2.66667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default QrCodeV2;
