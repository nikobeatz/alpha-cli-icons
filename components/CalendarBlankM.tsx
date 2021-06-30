import * as React from "react";

export const CalendarBlankM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.831 2a.833.833 0 00-.833.833V4.5c0 .028.001.055.004.083a4.168 4.168 0 00-3.337 4.084v9.166A4.167 4.167 0 007.83 22h8.334a4.167 4.167 0 004.166-4.167V8.667c0-2.018-1.433-3.7-3.337-4.084a.834.834 0 00.004-.083V2.833a.833.833 0 00-1.667 0V4.5h-2.5V2.833a.833.833 0 00-1.666 0V4.5h-2.5V2.833A.833.833 0 007.83 2zm-2.5 6.667a2.5 2.5 0 012.5-2.5h8.334a2.5 2.5 0 012.5 2.5v9.166a2.5 2.5 0 01-2.5 2.5H7.83a2.5 2.5 0 01-2.5-2.5V8.667z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarBlankM;
