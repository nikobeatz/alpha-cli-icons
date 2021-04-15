import * as React from "react";

export const BoxM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M20.338 7.561a.195.195 0 010-.08.174.174 0 010-.07v-.09l-.06-.152a.48.48 0 00-.088-.11l-.09-.08h-.049l-3.888-2.504-3.672-2.313a.833.833 0 00-.286-.15h-.079a.795.795 0 00-.266 0h-.099c-.114.025-.224.07-.326.13L4.063 6.817l-.089.07-.089.081-.098.07-.05.06-.059.152v.15a.706.706 0 000 .202v8.777c0 .171.042.34.123.489.081.15.199.275.34.366l7.403 4.665.148.06h.079a.833.833 0 00.513 0h.08l.147-.06 7.343-4.595a.999.999 0 00.34-.366 1.02 1.02 0 00.124-.488V7.672s.02-.07.02-.11zm-8.38-3.368L13.716 5.3 8.198 8.778 6.432 7.672l5.527-3.479zm-.986 15.082l-5.429-3.378V9.472l5.429 3.418v6.385zm.987-8.154l-1.886-1.157 5.517-3.489 1.895 1.197-5.526 3.449zm6.415 4.745l-5.429 3.44V12.89l5.429-3.418v6.395z"
      fill="currentColor"
    />
  </svg>
);
export default BoxM;
