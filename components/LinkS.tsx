import * as React from "react";

export const LinkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11.235 5H5.353a3 3 0 00-3 3v2.706a3 3 0 003 3h2.412v-.118h2v.118h1.47a3 3 0 003-3v-.412h-1.47c-.971 0-1.834.461-2.383 1.177H8.108a5.002 5.002 0 014.657-3.177h5.882a5 5 0 015 5V16a5 5 0 01-5 5h-5.882a5 5 0 01-5-5v-.294H5.353a5 5 0 01-5-5V8a5 5 0 015-5h5.882a5.002 5.002 0 014.657 3.176h-2.274A2.995 2.995 0 0011.235 5zm-1.47 10.706V16a3 3 0 003 3h5.882a3 3 0 003-3v-2.706a3 3 0 00-3-3h-2.412v.412a5 5 0 01-5 5h-1.47z"
      fill="currentColor"
    />
  </svg>
);
export default LinkS;
