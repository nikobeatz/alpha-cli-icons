import * as React from "react";

export const FlagPoleM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.571 2.414h9.691c.434 0 .786.352.786.786v10.476a.786.786 0 01-.786.786h-9.69v8.314c0 .434-.352.957-.786.957-.434 0-.786-.523-.786-.957V1.052a.786.786 0 011.571 0v1.362z"
      fill="currentColor"
    />
    <path
      d="M20.965 11.057l1.979 4.947a.786.786 0 01-.73 1.077H9.643a.785.785 0 01-.786-.786v-.262h3.405a2.36 2.36 0 002.357-2.357V5.033h7.595a.786.786 0 01.73 1.078l-1.979 4.946z"
      fill="currentColor"
    />
  </svg>
);
export default FlagPoleM;
