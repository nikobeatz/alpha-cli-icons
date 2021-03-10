import * as React from "react";

export const StopwatchM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v25H0z" />
    <path
      d="M19.27 7.144l1.437-1.437-1.414-1.414-1.537 1.537A9.937 9.937 0 0013 4.05V2h2V0H9v2h2v2.05a9.937 9.937 0 00-4.756 1.78L4.707 4.293 3.293 5.707 4.73 7.144a10 10 0 1014.54 0zM12 22a8 8 0 118-8 8.009 8.009 0 01-8 8z"
      fill="currentColor"
    />
    <path d="M12 8v6H6a6 6 0 106-6z" fill="currentColor" />
  </svg>
);
export default StopwatchM;
