import * as React from "react";

export const ClockM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M15.884 3.046a3.572 3.572 0 015.05 5.05.714.714 0 01-1.01 0l-4.04-4.04a.714.714 0 010-1.01zM8.076 3.046a3.572 3.572 0 00-5.05 5.05.714.714 0 001.01 0l4.04-4.04a.714.714 0 000-1.01z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.653 18.136a7.857 7.857 0 10-11.346 0l-2.042 2.721a.714.714 0 101.143.857l1.979-2.638a7.8 7.8 0 009.186 0l1.978 2.638a.714.714 0 001.143-.857l-2.041-2.721zm-4.959-5.422c0 .154-.05.305-.143.428L10.408 16a.714.714 0 11-1.143-.857l2-2.667V8.428a.714.714 0 111.43 0v4.286z"
      fill="currentColor"
    />
  </svg>
);
export default ClockM;
