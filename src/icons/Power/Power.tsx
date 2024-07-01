import { IconProps } from "types/icon";

const Power = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 0H11V13H13V0Z" fill="white" />
      <path
        d="M1 12.9263C0.999604 10.863 1.5715 8.84053 2.65124 7.08693C3.73097 5.33333 5.27563 3.91827 7.11111 3.00123V5.85543C5.61635 6.90354 4.49277 8.40468 3.90391 10.1404C3.31504 11.8761 3.29162 13.7557 3.83706 15.5057C4.3825 17.2557 5.46832 18.7848 6.9365 19.8703C8.40467 20.9559 10.1786 21.5413 12 21.5413C13.8214 21.5413 15.5953 20.9559 17.0635 19.8703C18.5317 18.7848 19.6175 17.2557 20.1629 15.5057C20.7084 13.7557 20.685 11.8761 20.0961 10.1404C19.5072 8.40468 18.3836 6.90354 16.8889 5.85543V3C18.6448 3.87729 20.1361 5.21114 21.2083 6.86353C22.2806 8.51592 22.8949 10.4268 22.9877 12.3985C23.0805 14.3702 22.6484 16.331 21.7361 18.0781C20.8239 19.8252 19.4646 21.2951 17.7989 22.3357C16.1333 23.3763 14.2217 23.9498 12.2621 23.9969C10.3025 24.0439 8.36602 23.5628 6.65302 22.6033C4.94001 21.6438 3.51273 20.2408 2.51885 18.5394C1.52497 16.8381 1.0006 14.9002 1 12.9263Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Power;
