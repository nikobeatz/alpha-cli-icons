import * as React from "react";

export const BookS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.103 3.365v7.182a.48.48 0 01-.478.478c-1.11.003-2.971.235-4.255 1.584V5.093a.46.46 0 01.066-.242c1.054-1.703 3.078-1.962 4.191-1.964h.001a.478.478 0 01.475.479zM3.372 2.887h.001c1.113.002 3.138.261 4.191 1.964a.46.46 0 01.066.243v7.515c-1.284-1.348-3.144-1.58-4.255-1.583a.48.48 0 01-.478-.48v-7.18a.478.478 0 01.475-.48z"
      fill="currentColor"
    />
    <path
      d="M14.19 4.543h-.346v6.003c0 .673-.546 1.221-1.217 1.223-.942.002-2.495.187-3.595 1.232 1.902-.468 3.908-.164 5.051.098a.475.475 0 00.584-.467v-7.61a.478.478 0 00-.477-.48zM2.156 4.543v6.003c0 .673.546 1.221 1.217 1.223.942.002 2.495.187 3.595 1.232-1.902-.468-3.908-.164-5.05.098a.475.475 0 01-.585-.467v-7.61c0-.265.215-.48.478-.48h.345z"
      fill="currentColor"
    />
  </svg>
);
export default BookS;
