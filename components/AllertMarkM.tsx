import * as React from "react";

export const AllertMarkM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.148 4.308a2.158 2.158 0 013.714 0l7.831 13.14c.866 1.454-.174 3.302-1.857 3.302H4.173c-1.683 0-2.722-1.848-1.856-3.301l7.831-13.14zm.746 9.15v-4.86h2.222v4.86h-2.222zm1.11 4.375c-.92 0-1.666-.653-1.666-1.458 0-.805.746-1.458 1.667-1.458.92 0 1.666.653 1.666 1.458 0 .805-.746 1.458-1.666 1.458z"
      fill="currentColor"
    />
  </svg>
);
export default AllertMarkM;
