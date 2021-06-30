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
    <path d="M0 0h17v17H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.234 4.122h2.916c.845 0 1.528.683 1.528 1.527v1.806h-3.333V6.76a.42.42 0 00-.417-.416.42.42 0 00-.417.416v.695h-5V6.76a.42.42 0 00-.416-.416.42.42 0 00-.417.416v.695H1.345V5.649c0-.844.683-1.527 1.528-1.527h2.916v-.556c0-.613.499-1.111 1.112-1.111h2.222c.613 0 1.11.498 1.11 1.111v.556zm-1.111 0v-.556H6.9v.556h2.222z"
      fill="currentColor"
    />
    <path
      d="M11.345 8.8v-.512h3.333v3.75c0 .845-.683 1.528-1.528 1.528H2.873a1.527 1.527 0 01-1.528-1.528v-3.75h3.333V8.8a.42.42 0 00.417.417.42.42 0 00.416-.417v-.51h5v.51a.42.42 0 00.417.417.42.42 0 00.417-.417z"
      fill="currentColor"
    />
  </svg>
);
export default PortfolioS;
