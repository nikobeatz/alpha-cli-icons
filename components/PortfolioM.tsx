import * as React from "react";

export const PortfolioM = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 5h5.25C22.77 5 24 6.23 24 7.75V11h-6V9.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V11h-9V9.75c0-.41-.34-.75-.75-.75S6 9.34 6 9.75V11H0V7.75C0 6.23 1.23 5 2.75 5H8V4c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2v1zm-2 0V4h-4v1h4zm4 8.42v-.92h6v6.75c0 1.52-1.23 2.75-2.75 2.75H2.75C1.23 22 0 20.77 0 19.25V12.5h6v.92c0 .41.34.75.75.75s.75-.34.75-.75v-.92h9v.92c0 .41.34.75.75.75s.75-.34.75-.75z"
      fill="currentColor"
    />
  </svg>
);
export default PortfolioM;
