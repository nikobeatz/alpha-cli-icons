import * as React from "react";

export const TimerM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.138 2a1.304 1.304 0 100 2.609h.434v1.304h2.61V4.609h.434a1.304 1.304 0 100-2.609h-3.478z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.75 14.246a7.754 7.754 0 11-15.51 0 7.754 7.754 0 0115.51 0zm-8.76-4.364h1.327v4.372l3.536 2.435-.752 1.092-3.77-2.595h-.34v-.235l-.259-.178.259-.376V9.882z"
      fill="currentColor"
    />
    <path
      d="M17.12 4.677a.833.833 0 00-1.138.306l-.669 1.161 2.26 1.303.67-1.162a.833.833 0 00-.306-1.138l-.816-.47z"
      fill="currentColor"
    />
  </svg>
);
export default TimerM;
