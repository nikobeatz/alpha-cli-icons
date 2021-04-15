import * as React from "react";

export const PersonMinusS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h16v16H0z" />
    <path
      d="M8.381 5.377c0-1.498-1.25-2.71-2.793-2.71-1.544 0-2.794 1.212-2.794 2.71 0 1.497 1.25 2.71 2.794 2.71 1.543 0 2.793-1.213 2.793-2.71zm2.096 1.355v1.355h4.19V6.732h-4.19zM0 12.152v1.355h11.175v-1.355c0-1.802-3.722-2.71-5.587-2.71-1.865 0-5.588.908-5.588 2.71z"
      fill="currentColor"
    />
  </svg>
);
export default PersonMinusS;
