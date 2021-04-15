import * as React from "react";

export const CalendarOutlineS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M5.225 10.5c0-.46.373-.833.833-.833h.555c.46 0 .834.373.834.833v.556c0 .46-.373.833-.834.833h-.555a.833.833 0 01-.833-.833V10.5z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.225 1.333a.556.556 0 00-.556.556v1.115a3.335 3.335 0 00-2.222 3.144v5.185a3.333 3.333 0 003.333 3.334h4.445a3.333 3.333 0 003.333-3.334V6.148a3.335 3.335 0 00-2.222-3.144V1.889a.556.556 0 00-1.111 0v.925H5.78V1.89a.556.556 0 00-.555-.556zm5 2.592H5.78A2.223 2.223 0 003.59 5.778h8.827a2.223 2.223 0 00-2.191-1.853zm2.222 2.964h-8.89v4.444c0 1.228.996 2.223 2.223 2.223h4.445a2.222 2.222 0 002.222-2.223V6.89z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarOutlineS;
