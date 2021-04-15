import * as React from "react";

export const CalendarS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.965 1.333a.505.505 0 00-.505.505V2.88c0 .166.08.314.205.406a4.01 4.01 0 00-2.074 2.492H13.4a4.01 4.01 0 00-2-2.454.513.513 0 00.27-.452V1.846a.513.513 0 10-1.025 0v1.026a.51.51 0 00.025.158 4.002 4.002 0 00-1.119-.158H6.44c-.34 0-.669.042-.983.122a.506.506 0 00.013-.114V1.838a.505.505 0 00-.505-.505zm8.578 5.278H2.448a4.062 4.062 0 00-.008.26v3.796a4 4 0 004 4H9.55a4 4 0 004-4V6.872c0-.088-.003-.175-.008-.26zM5.944 9.282a.77.77 0 11-1.538 0 .77.77 0 011.538 0zm1.795.77a.77.77 0 100-1.54.77.77 0 000 1.54zm-1.795 1.794a.77.77 0 11-1.538 0 .77.77 0 011.538 0zm4.36-1.795a.77.77 0 100-1.538.77.77 0 000 1.538z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarS;