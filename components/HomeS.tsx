import * as React from "react";

export const HomeS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.81 2.779c.041-.03.095-.03.136-.002l5.802 4.042a.585.585 0 00.668-.96L8.615 1.819a1.287 1.287 0 00-1.492.015L1.574 5.866a.585.585 0 10.688.946L7.811 2.78z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.471 7.95c0-.351.166-.682.448-.891l3.307-2.462c.385-.286.91-.294 1.302-.018l3.529 2.481c.296.208.472.547.472.909v5.33c0 .613-.497 1.11-1.111 1.11H4.582a1.111 1.111 0 01-1.11-1.11V7.95zm4.997 1.197a1.053 1.053 0 112.105 0 1.053 1.053 0 01-2.105 0z"
      fill="currentColor"
    />
  </svg>
);
export default HomeS;
