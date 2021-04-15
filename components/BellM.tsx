import * as React from "react";

export const BellM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12.002 23.5a2.373 2.373 0 002.372-2.359H9.628a2.365 2.365 0 002.373 2.359zm7.118-7.077v-5.897c0-3.621-1.945-6.653-5.339-7.455V2.27c0-.979-.795-1.769-1.78-1.769-.984 0-1.78.79-1.78 1.77v.801c-3.405.802-5.339 3.822-5.339 7.455v5.897l-1.53 1.522c-.748.743-.226 2.017.83 2.017H19.81c1.056 0 1.59-1.274.842-2.017l-1.53-1.522z"
      fill="currentColor"
    />
  </svg>
);
export default BellM;
