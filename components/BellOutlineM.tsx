import * as React from "react";

export const BellOutlineM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.005 2a6.25 6.25 0 00-6.25 6.25v3.684a.313.313 0 01-.053.173l-2.129 3.194a1.897 1.897 0 001.579 2.949h13.706a1.897 1.897 0 001.578-2.95l-2.129-3.193a.312.312 0 01-.052-.173V8.25A6.25 6.25 0 0012.005 2zM7.63 8.25a4.375 4.375 0 118.75 0v3.684c0 .432.128.854.367 1.213l2.13 3.194a.022.022 0 01.003.012v.006l-.002.002-.005.008-.007.005-.008.001H5.152l-.008-.001-.008-.005-.005-.008-.001-.008c0-.004.001-.009.004-.012l2.128-3.194c.24-.359.368-.781.368-1.213V8.25z"
      fill="currentColor"
    />
    <path
      d="M14.486 19.812a2.5 2.5 0 01-4.962 0c-.021-.171.12-.312.293-.312h4.375c.173 0 .315.14.294.312z"
      fill="currentColor"
    />
  </svg>
);
export default BellOutlineM;
