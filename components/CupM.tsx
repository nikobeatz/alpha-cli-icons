import React from "react";

export const CupM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path d="M9 2H8v3h1V2z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2 6H5.7a.906.906 0 00-.636.26.883.883 0 00-.264.629v8c0 .943.38 1.847 1.054 2.514A3.623 3.623 0 008.4 18.444h5.4c.955 0 1.87-.374 2.546-1.041a3.534 3.534 0 001.054-2.514v-2.667h1.8c.477 0 .935-.187 1.273-.52.338-.334.527-.786.527-1.258V7.778c0-.472-.19-.924-.527-1.257A1.811 1.811 0 0019.2 6zm-1.8 4.444V7.778h1.8v2.666h-1.8z"
      fill="currentColor"
    />
    <path
      d="M19.2 20.222H3V22h16.2v-1.778zM11 2h1v3h-1V2zM15 2h-1v3h1V2z"
      fill="currentColor"
    />
  </svg>
);
export default CupM;
