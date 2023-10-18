import React from "react";

export const PenM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M20.195 3.02A3.266 3.266 0 0017.836 2a3.242 3.242 0 00-2.358 1.02L4.002 14.994a.927.927 0 00-.21.355L2.05 20.804c-.152.476.095.99.551 1.15a.839.839 0 00.55 0l5.227-1.819a.868.868 0 00.34-.22L20.196 7.942c1.302-1.359 1.302-3.562 0-4.922zM15.338 18.667h6.667V22h-6.667v-3.333z"
      fill="currentColor"
    />
  </svg>
);
export default PenM;
