import * as React from "react";

export const ClockS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.472 1.703a4.107 4.107 0 015.807 5.807c-.32.32-.84.32-1.161 0l-4.646-4.646a.821.821 0 010-1.161zm-8.98 0A4.107 4.107 0 001.685 7.51c.321.32.841.32 1.162 0l4.647-4.646c.32-.32.32-.84 0-1.162zm11.014 17.353a9.036 9.036 0 10-13.048 0l-2.348 3.13a.821.821 0 001.315.985L6.7 20.137a8.97 8.97 0 0010.564 0l2.276 3.034a.821.821 0 101.314-.985l-2.348-3.13zm-5.702-6.235c0 .178-.058.35-.165.493L10.175 16.6a.821.821 0 11-1.314-.986l2.3-3.067V7.892a.821.821 0 011.643 0v4.93z"
      fill="currentColor"
    />
  </svg>
);
export default ClockS;
