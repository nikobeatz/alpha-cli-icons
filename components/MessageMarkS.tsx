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
    <path d="M0 0h16v16H0z" />
    <path
      d="M7.683 12.109h-3.81l-2.54 2.555v-11.5c0-.702.572-1.277 1.27-1.277h10.16c.697 0 1.269.575 1.269 1.277v4.473h-1.27V3.164H2.603v7.667h5.08v1.278zm6.984-2.338l-.895-.901-2.693 2.709-1.346-1.355-.895.901 2.235 2.262 3.594-3.616z"
      fill="currentColor"
    />
  </svg>
);
export default MessageMarkS;
