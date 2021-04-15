import * as React from "react";

export const PortfolioS = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.222 4.133h2.917c.844 0 1.528.684 1.528 1.528v1.806h-3.334v-.695a.42.42 0 00-.416-.416.42.42 0 00-.417.416v.695h-5v-.695a.42.42 0 00-.417-.416.42.42 0 00-.416.416v.695H1.333V5.66c0-.844.684-1.528 1.528-1.528h2.917v-.555c0-.613.498-1.111 1.111-1.111h2.222c.613 0 1.111.498 1.111 1.11v.556zm-1.11 0v-.555H6.888v.555h2.222z"
      fill="currentColor"
    />
    <path
      d="M11.333 8.811V8.3h3.334v3.75c0 .845-.684 1.528-1.528 1.528H2.86a1.527 1.527 0 01-1.528-1.528V8.3h3.334v.511a.42.42 0 00.416.417.42.42 0 00.417-.417V8.3h5v.511a.42.42 0 00.417.417.42.42 0 00.416-.417z"
      fill="currentColor"
    />
  </svg>
);
export default PortfolioS;
