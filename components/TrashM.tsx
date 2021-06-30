import * as React from "react";

export const TrashM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.595 4a2 2 0 012-2h4.823a2 2 0 012 2v.843h4.03a.726.726 0 010 1.451h-.814V19a3 3 0 01-3 3H7.39a3 3 0 01-3-3V6.294h-.823a.725.725 0 010-1.45h4.029v-.844zm1.562.843h5.882v-.667a1 1 0 00-1-1h-3.882a1 1 0 00-1 1v.667zM5.928 6.294h12.167V18.81a1.7 1.7 0 01-1.7 1.7H7.628a1.7 1.7 0 01-1.7-1.7V6.294z"
      fill="currentColor"
    />
  </svg>
);
export default TrashM;
