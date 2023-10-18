import React from "react";

export const RolledSheetM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v25H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.966 3.22V19.55c0 .659.218 1.268.587 1.758H4.935a2.933 2.933 0 01-2.93-2.93V3.221c0-.324.262-.586.586-.586H16.38c.323 0 .586.262.586.586zM4.88 15.575a.625.625 0 100 1.25h2.75a.625.625 0 100-1.25H4.88zm-.625-2.208c0-.345.28-.625.625-.625h9.583a.625.625 0 110 1.25H4.88a.625.625 0 01-.625-.625zm.833-7.875a.833.833 0 00-.833.834v2.5c0 .46.373.833.833.833h3.334c.46 0 .833-.373.833-.833v-2.5a.833.833 0 00-.833-.834H5.088z"
      fill="currentColor"
    />
    <path
      d="M18.137 6.696h3.282c.323 0 .586.263.586.586v7.527c0 4.557 0 4.697-.002 4.697a1.934 1.934 0 01-3.862.043c-.004 0-.004-.193-.004-4.904v-.01-7.939z"
      fill="currentColor"
    />
  </svg>
);
export default RolledSheetM;
