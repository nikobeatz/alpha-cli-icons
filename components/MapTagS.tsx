import * as React from "react";

export const MapTagS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.933 4.59v8.122l3.208-1.374 3.8 1.9 3.126-1.341V3.776l.825-.354a.317.317 0 01.441.292v9.019l-4.433 1.9-3.8-1.9-3.992 1.71a.317.317 0 01-.441-.29v-9.02l1.266-.543zm7.754 3.23L8 10.507 5.313 7.82a3.8 3.8 0 115.374 0zM8 8.716l1.791-1.792a2.533 2.533 0 10-3.582 0L8 8.716z"
      fill="currentColor"
    />
  </svg>
);
export default MapTagS;
