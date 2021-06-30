import * as React from "react";

export const ParkingM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12.577 2H4.5v20h4.615v-6.667h3.462c3.82 0 6.923-2.989 6.923-6.666C19.5 4.989 16.396 2 12.577 2zm.23 8.889H9.116V6.444h3.693c1.269 0 2.307 1 2.307 2.223 0 1.222-1.038 2.222-2.307 2.222z"
      fill="currentColor"
    />
  </svg>
);
export default ParkingM;
