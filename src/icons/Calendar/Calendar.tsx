import { IconProps } from "types/icon";

const Calendar = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 14.4C11.6537 14.4 11.3632 14.2848 11.1286 14.0544C10.8939 13.824 10.777 13.5392 10.7778 13.2C10.7778 12.86 10.8951 12.5748 11.1298 12.3444C11.3644 12.114 11.6545 11.9992 12 12C12.3463 12 12.6368 12.1152 12.8714 12.3456C13.1061 12.576 13.223 12.8608 13.2222 13.2C13.2222 13.54 13.1049 13.8252 12.8702 14.0556C12.6356 14.286 12.3455 14.4008 12 14.4ZM7.11111 14.4C6.76482 14.4 6.47433 14.2848 6.23967 14.0544C6.005 13.824 5.88808 13.5392 5.88889 13.2C5.88889 12.86 6.00622 12.5748 6.24089 12.3444C6.47556 12.114 6.76563 11.9992 7.11111 12C7.45741 12 7.74789 12.1152 7.98256 12.3456C8.21722 12.576 8.33415 12.8608 8.33333 13.2C8.33333 13.54 8.216 13.8252 7.98133 14.0556C7.74667 14.286 7.45659 14.4008 7.11111 14.4ZM16.8889 14.4C16.5426 14.4 16.2521 14.2848 16.0174 14.0544C15.7828 13.824 15.6659 13.5392 15.6667 13.2C15.6667 12.86 15.784 12.5748 16.0187 12.3444C16.2533 12.114 16.5434 11.9992 16.8889 12C17.2352 12 17.5257 12.1152 17.7603 12.3456C17.995 12.576 18.1119 12.8608 18.1111 13.2C18.1111 13.54 17.9938 13.8252 17.7591 14.0556C17.5244 14.286 17.2344 14.4008 16.8889 14.4ZM12 19.2C11.6537 19.2 11.3632 19.0848 11.1286 18.8544C10.8939 18.624 10.777 18.3392 10.7778 18C10.7778 17.66 10.8951 17.3748 11.1298 17.1444C11.3644 16.914 11.6545 16.7992 12 16.8C12.3463 16.8 12.6368 16.9152 12.8714 17.1456C13.1061 17.376 13.223 17.6608 13.2222 18C13.2222 18.34 13.1049 18.6252 12.8702 18.8556C12.6356 19.086 12.3455 19.2008 12 19.2ZM7.11111 19.2C6.76482 19.2 6.47433 19.0848 6.23967 18.8544C6.005 18.624 5.88808 18.3392 5.88889 18C5.88889 17.66 6.00622 17.3748 6.24089 17.1444C6.47556 16.914 6.76563 16.7992 7.11111 16.8C7.45741 16.8 7.74789 16.9152 7.98256 17.1456C8.21722 17.376 8.33415 17.6608 8.33333 18C8.33333 18.34 8.216 18.6252 7.98133 18.8556C7.74667 19.086 7.45659 19.2008 7.11111 19.2ZM16.8889 19.2C16.5426 19.2 16.2521 19.0848 16.0174 18.8544C15.7828 18.624 15.6659 18.3392 15.6667 18C15.6667 17.66 15.784 17.3748 16.0187 17.1444C16.2533 16.914 16.5434 16.7992 16.8889 16.8C17.2352 16.8 17.5257 16.9152 17.7603 17.1456C17.995 17.376 18.1119 17.6608 18.1111 18C18.1111 18.34 17.9938 18.6252 17.7591 18.8556C17.5244 19.086 17.2344 19.2008 16.8889 19.2ZM3.44445 24C2.77222 24 2.19656 23.7648 1.71745 23.2944C1.23834 22.824 0.999187 22.2592 1 21.6V4.8C1 4.14 1.23956 3.5748 1.71867 3.1044C2.19778 2.634 2.77304 2.3992 3.44445 2.4H4.66667V1.2C4.66667 0.860004 4.784 0.574804 5.01867 0.344404C5.25333 0.114004 5.54341 -0.000795848 5.88889 4.15225e-06C6.23519 4.15225e-06 6.52567 0.115204 6.76033 0.345604C6.995 0.576004 7.11193 0.860804 7.11111 1.2V2.4H16.8889V1.2C16.8889 0.860004 17.0062 0.574804 17.2409 0.344404C17.4756 0.114004 17.7656 -0.000795848 18.1111 4.15225e-06C18.4574 4.15225e-06 18.7479 0.115204 18.9826 0.345604C19.2172 0.576004 19.3341 0.860804 19.3333 1.2V2.4H20.5556C21.2278 2.4 21.8034 2.6352 22.2826 3.1056C22.7617 3.576 23.0008 4.1408 23 4.8V21.6C23 22.26 22.7604 22.8252 22.2813 23.2956C21.8022 23.766 21.227 24.0008 20.5556 24H3.44445ZM3.44445 21.6H20.5556V9.6H3.44445V21.6Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Calendar;
