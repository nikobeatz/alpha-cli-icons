import * as React from "react";

export const RolledSheetM = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.953 1.703v19.594c0 .79.263 1.521.705 2.109H3.516A3.52 3.52 0 010 19.89V1.703C0 1.315.315 1 .703 1H17.25c.388 0 .703.315.703.703zM3.45 16.527a.75.75 0 000 1.5h3.3a.75.75 0 100-1.5h-3.3zm-.75-2.65a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H3.45a.75.75 0 01-.75-.75zm1-9.45a1 1 0 00-1 1v3a1 1 0 001 1h4a1 1 0 001-1v-3a1 1 0 00-1-1h-4z"
      fill="currentColor"
    />
    <path
      d="M19.36 5.874h3.937c.388 0 .703.315.703.703v9.031c0 5.47 0 5.637-.002 5.637a2.321 2.321 0 01-4.635.051v.002c-.004 0-.004-.233-.004-5.886V15.4 5.874z"
      fill="currentColor"
    />
  </svg>
);
export default RolledSheetM;
