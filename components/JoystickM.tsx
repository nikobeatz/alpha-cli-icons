import * as React from "react";

export const JoystickM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v24H0z" />
    <path
      d="M.461 3.5a3 3 0 013-3h2.9a3 3 0 013 3v3.446a3 3 0 01-3 3h-2.9a3 3 0 01-3-3V3.5zM14.446 5.223c0-2.609 2.16-4.723 4.768-4.723 2.609 0 4.768 2.114 4.768 4.723 0 2.608-2.16 4.723-4.768 4.723-2.608 0-4.768-2.115-4.768-4.723zM5.579 15.205a1 1 0 00-1.728 0L.256 21.373a1 1 0 00.864 1.504h7.19a1 1 0 00.863-1.504L5.58 15.205zM14.652 13.928a1.5 1.5 0 012.121-.01l2.439 2.416 2.443-2.42a1.5 1.5 0 012.111 2.131l-2.422 2.4 2.422 2.4a1.5 1.5 0 11-2.111 2.131l-2.443-2.42-2.439 2.416a1.5 1.5 0 01-2.11-2.131l2.418-2.396-2.419-2.395a1.5 1.5 0 01-.01-2.122z"
      fill="currentColor"
    />
  </svg>
);
export default JoystickM;
