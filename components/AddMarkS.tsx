import * as React from "react";

export const AddMarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.445 5.222h1.11v2.222h2.223v1.112H8.556v2.222H7.445V8.556H5.222V7.444h2.223V5.222z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.778 1.333a4.444 4.444 0 00-4.444 4.445v4.444a4.444 4.444 0 004.444 4.445h4.444a4.444 4.444 0 004.445-4.445V5.778a4.444 4.444 0 00-4.445-4.445H5.778zm0 .556a3.889 3.889 0 00-3.889 3.889v4.444a3.889 3.889 0 003.889 3.89h4.444a3.889 3.889 0 003.89-3.89V5.778a3.889 3.889 0 00-3.89-3.89H5.778z"
      fill="currentColor"
    />
  </svg>
);
export default AddMarkS;
