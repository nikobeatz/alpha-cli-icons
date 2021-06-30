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
    <path d="M0 0h17v17H0z" />
    <path
      d="M5.238 10.507c0-.46.373-.834.833-.834h.556c.46 0 .833.373.833.834v.555c0 .46-.373.834-.833.834H6.07a.833.833 0 01-.833-.834v-.555z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.238 1.34a.556.556 0 00-.556.556V3.01A3.335 3.335 0 002.46 6.154v5.186a3.333 3.333 0 003.333 3.333h4.445a3.333 3.333 0 003.333-3.333V6.154a3.335 3.335 0 00-2.222-3.143V1.896a.556.556 0 00-1.111 0v.925H5.793v-.925a.556.556 0 00-.555-.556zm5 2.592H5.793a2.223 2.223 0 00-2.191 1.853h8.827a2.223 2.223 0 00-2.191-1.853zm2.222 2.964H3.571v4.444c0 1.227.995 2.222 2.222 2.222h4.445a2.222 2.222 0 002.222-2.222V6.896z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarOutlineS;
