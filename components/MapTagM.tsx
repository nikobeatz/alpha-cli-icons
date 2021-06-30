import * as React from "react";

export const MapTagM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.4 6.915v12.183l4.812-2.061 5.7 2.85 4.688-2.012V5.694l1.238-.53a.475.475 0 01.662.436v13.53l-6.65 2.85-5.7-2.85-5.988 2.565a.475.475 0 01-.662-.437V7.73l1.9-.814zm11.63 4.845L12 15.79l-4.03-4.03a5.7 5.7 0 118.06 0zM12 13.104l2.687-2.688a3.8 3.8 0 10-5.374 0L12 13.104z"
      fill="currentColor"
    />
  </svg>
);
export default MapTagM;
