import React from "react";

export const ChartM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.42 13.36c0-.46.373-.834.833-.834h.463c.46 0 .833.373.833.834v7.807c0 .46-.373.833-.833.833h-.463a.833.833 0 01-.833-.833V13.36zm17.037-4.21c0-.461.373-.834.833-.834h.463c.46 0 .833.373.833.833v12.018c0 .46-.373.833-.833.833h-.463a.833.833 0 01-.833-.833V9.149zm-8.519-6.317c0-.46.373-.833.833-.833h.463c.46 0 .834.373.834.833v18.334c0 .46-.373.833-.833.833h-.463a.833.833 0 01-.834-.833V2.833z"
      fill="currentColor"
    />
  </svg>
);
export default ChartM;
