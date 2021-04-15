import * as React from "react";

export const LocationM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11.994 2C8.09 2 4.911 5.119 4.911 8.952 4.91 13.77 12 22 12 22s7.077-8.467 7.077-13.048C19.078 5.119 15.9 2 11.994 2zm2.137 8.987a3.043 3.043 0 01-2.137.868c-.774 0-1.548-.29-2.137-.868a2.93 2.93 0 010-4.195 3.03 3.03 0 012.137-.868c.808 0 1.566.308 2.137.868a2.93 2.93 0 010 4.195z"
      fill="currentColor"
    />
  </svg>
);
export default LocationM;
