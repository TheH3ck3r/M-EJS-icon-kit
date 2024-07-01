import { IconProps } from "types/icon";

const YandexRu = ({ width = 24, height = 24 }: IconProps) => {
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
        d="M13.691 19.212H16.1981V4.81201H12.5515C8.88413 4.81201 6.95723 6.6975 6.95723 9.4739C6.95723 11.6909 8.01393 12.9962 9.89938 14.343L6.62573 19.212H9.33998L12.9866 13.7628L11.7227 12.9133C10.1894 11.8774 9.44353 11.0693 9.44353 9.32885C9.44353 7.7956 10.521 6.75965 12.5722 6.75965H13.691V19.212Z"
        fill="white"
      />
    </svg>
  );
};

export default YandexRu;
