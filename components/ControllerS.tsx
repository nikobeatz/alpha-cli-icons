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
    <path d="M0 0h17v17H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.223 4.303H11.74V1.34H10.26v2.963H8.778v1.481h4.445V4.303zM4.292 8.747H2.81V7.266h4.445v1.481H5.773v5.926H4.292V8.747zm0-7.407h1.482v4.444H4.292V1.34zm7.45 13.333h-1.481V7.266h1.481v7.407z"
      fill="currentColor"
    />
  </svg>
);
export default ControllerS;
