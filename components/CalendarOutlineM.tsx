import * as React from "react";

export const CalendarOutlineM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      d="M7.838 15.75c0-.69.56-1.25 1.25-1.25h.833c.69 0 1.25.56 1.25 1.25v.833c0 .69-.56 1.25-1.25 1.25h-.833c-.69 0-1.25-.56-1.25-1.25v-.833z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.838 2a.833.833 0 00-.834.833v1.673a5.002 5.002 0 00-3.333 4.715V17a5 5 0 005 5h6.667a5 5 0 005-5V9.221a5.002 5.002 0 00-3.334-4.715V2.833a.833.833 0 00-1.666 0v1.388H8.67V2.833A.833.833 0 007.838 2zm7.5 3.888H8.67a3.334 3.334 0 00-3.287 2.779h13.241a3.334 3.334 0 00-3.287-2.779zm3.333 4.445H5.338V17a3.333 3.333 0 003.333 3.333h6.667A3.333 3.333 0 0018.67 17v-6.667z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarOutlineM;
