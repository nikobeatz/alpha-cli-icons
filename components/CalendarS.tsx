import React from "react";

export const CalendarS = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.985 1.34a.505.505 0 00-.505.505v1.033h-.02a2 2 0 00-2 2v7.795a2 2 0 002 2h7.111a2 2 0 002-2V6.618H2.461v-.834h11.11v-.906a2 2 0 00-1.88-1.996V1.853a.513.513 0 00-1.026 0v1.025H5.49V1.845a.505.505 0 00-.505-.505zm.98 7.949a.77.77 0 11-1.54 0 .77.77 0 011.54 0zm1.794.769a.77.77 0 100-1.539.77.77 0 000 1.539zm-1.795 1.795a.77.77 0 11-1.538 0 .77.77 0 011.538 0zm4.36-1.795a.77.77 0 100-1.539.77.77 0 000 1.539z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarS;
