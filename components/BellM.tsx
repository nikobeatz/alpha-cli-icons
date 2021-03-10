import * as React from "react";

export const BellM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.985 24a3.756 3.756 0 003.674-3H7.31a3.756 3.756 0 003.674 3zM17.997 12h-.012c-3.86 0-7-3.14-7-7 0-1.061.244-2.064.669-2.966A7 7 0 003.984 9v2.788a6.705 6.705 0 01-2.387 5.133 1.75 1.75 0 00-.55 1.796C1.259 19.5 2.033 20 2.845 20H19.12c.852 0 1.655-.552 1.828-1.387a1.753 1.753 0 00-.597-1.712c-1.454-1.219-2.295-3.01-2.354-4.902z"
      fill="currentColor"
    />
    <path d="M22.985 5a5 5 0 11-10 0 5 5 0 0110 0z" fill="currentColor" />
  </svg>
);
export default BellM;
