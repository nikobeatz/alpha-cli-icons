import * as React from "react";

export const ListM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.5 4a3 3 0 013-3h13.13a3 3 0 013 3v16a3 3 0 01-3 3H5.5a3 3 0 01-3-3V4zm2.87 2.739a.957.957 0 111.913 0 .957.957 0 01-1.913 0zm4.782-.957a.957.957 0 100 1.913h7.652a.957.957 0 000-1.913h-7.652zm-4.782 5.74a.957.957 0 111.913 0 .957.957 0 01-1.913 0zm4.782-.957a.957.957 0 000 1.914h7.652a.957.957 0 000-1.914h-7.652zm-4.782 5.74a.956.956 0 111.913 0 .956.956 0 01-1.913 0zm4.782-.957a.956.956 0 100 1.913h7.652a.957.957 0 000-1.913h-7.652z"
      fill="currentColor"
    />
  </svg>
);
export default ListM;
