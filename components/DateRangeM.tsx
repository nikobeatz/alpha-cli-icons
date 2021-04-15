import * as React from "react";

export const DateRangeM = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.387 2a.77.77 0 00-.77.77v1.548A3.334 3.334 0 003.542 7.64v11.026A3.333 3.333 0 006.874 22h10.257a3.333 3.333 0 003.333-3.333V7.64a3.334 3.334 0 00-3.077-3.323V2.769a.77.77 0 10-1.538 0v1.539h-3.077V2.769a.77.77 0 00-1.539 0v1.539H8.156V2.769A.77.77 0 007.386 2zm5.32 7.5a.833.833 0 010 1.667h-5a.833.833 0 010-1.667h5zm5 5a.833.833 0 00-.833-.834H7.708a.833.833 0 000 1.667h9.166c.46 0 .834-.373.834-.833z"
      fill="currentColor"
    />
  </svg>
);
export default DateRangeM;
