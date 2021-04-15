import * as React from "react";

export const CalendarBlankS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h16v16H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.225 1.333a.556.556 0 00-.556.556V3c0 .019 0 .037.003.055a2.779 2.779 0 00-2.225 2.723v6.11a2.778 2.778 0 002.778 2.779h5.555a2.778 2.778 0 002.778-2.778V5.778a2.779 2.779 0 00-2.225-2.723.556.556 0 00.003-.055V1.889a.556.556 0 00-1.111 0V3H8.558V1.889a.556.556 0 10-1.111 0V3H5.78V1.889a.556.556 0 00-.555-.556zM3.558 5.778c0-.92.746-1.667 1.667-1.667h5.555c.92 0 1.667.746 1.667 1.667v6.11c0 .921-.746 1.668-1.667 1.668H5.225c-.92 0-1.667-.747-1.667-1.667V5.778z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarBlankS;
