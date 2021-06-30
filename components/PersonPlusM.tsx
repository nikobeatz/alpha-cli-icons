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
    <path d="M0 0h25v25H0z" />
    <path
      d="M13.05 7.933c0-2.25-1.871-4.073-4.181-4.073S4.687 5.683 4.687 7.933c0 2.25 1.871 4.073 4.182 4.073 2.31 0 4.181-1.823 4.181-4.073zm2.091 2.036v2.037h3.137v3.054h2.09v-3.054h3.137V9.969h-3.136V6.915h-2.091v3.054H15.14zM.505 18.115v2.037h16.727v-2.037c0-2.708-5.572-4.073-8.363-4.073-2.792 0-8.364 1.365-8.364 4.073z"
      fill="currentColor"
    />
  </svg>
);
export default PersonPlusM;
