import * as React from "react";

export const ControllerS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.206 4.296h-1.481V1.333h-1.482v2.963H8.762v1.482h4.444V4.296zM4.275 8.741H2.793V7.259h4.445v1.482H5.756v5.926H4.275V8.74zm0-7.408h1.482v4.445H4.276V1.333zm7.45 13.333h-1.48V7.26h1.48v7.407z"
      fill="currentColor"
    />
  </svg>
);
export default ControllerS;
