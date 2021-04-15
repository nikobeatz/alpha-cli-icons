import * as React from "react";

export const PersonPlusM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12.546 8.073C12.546 5.823 10.674 4 8.364 4c-2.31 0-4.182 1.823-4.182 4.073 0 2.25 1.871 4.073 4.182 4.073 2.31 0 4.181-1.823 4.181-4.073zm2.09 2.036v2.037h3.137V15.2h2.09v-3.054H23v-2.037h-3.136V7.055h-2.091v3.054h-3.137zM0 18.255v2.037h16.727v-2.037c0-2.708-5.572-4.073-8.363-4.073C5.572 14.182 0 15.547 0 18.255z"
      fill="currentColor"
    />
  </svg>
);
export default PersonPlusM;
