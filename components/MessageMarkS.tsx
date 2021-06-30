import * as React from "react";

export const MessageMarkS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v16H0z" />
    <path
      d="M7.694 11.832h-3.81l-2.54 2.556v-11.5c0-.703.572-1.278 1.27-1.278h10.16c.698 0 1.27.575 1.27 1.278V7.36h-1.27V2.888H2.613v7.666h5.08v1.278zm6.984-2.338l-.895-.9-2.692 2.708-1.346-1.354-.896.9 2.235 2.262 3.594-3.616z"
      fill="currentColor"
    />
  </svg>
);
export default MessageMarkS;
