import * as React from "react";

export const TicketS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M1.753 3.64h3.564v8.723H1.753c-.232 0-.42-.206-.42-.46V9.567c0-.254.188-.46.42-.46.556 0 1.008-.496 1.008-1.106 0-.61-.452-1.107-1.008-1.107-.232 0-.42-.206-.42-.46V4.1c0-.255.188-.461.42-.461zM14.667 6.435c0 .254-.188.46-.42.46-.556 0-1.008.497-1.008 1.107s.452 1.106 1.008 1.106c.232 0 .42.206.42.46v2.335c0 .254-.188.46-.42.46h-8.09V3.64h8.09c.232 0 .42.206.42.46v2.335z"
      fill="currentColor"
    />
  </svg>
);
export default TicketS;
