import * as React from "react";

export const SoldMarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.001 3.333c0 .447-.146.86-.394 1.192l1.788 2.808h2.113c.64 0 1.16.52 1.16 1.16v5.014c0 .64-.52 1.16-1.16 1.16H2.494c-.64 0-1.16-.52-1.16-1.16V8.493c0-.64.52-1.16 1.16-1.16h2.113l1.787-2.809a2 2 0 113.607-1.19zm.215 4H5.785l1.386-2.18a1.993 1.993 0 001.658.001l1.387 2.18zm-.588 2l-1.921 1.961-1.357-1.32-.697.718 2.071 2.014 2.634-2.69-.697-.683h-.033z"
      fill="currentColor"
    />
  </svg>
);
export default SoldMarkS;
