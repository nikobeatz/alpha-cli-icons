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
      d="M16.962 3.216v16.328c0 .659.219 1.268.587 1.758H4.931A2.933 2.933 0 012 18.372V3.216c0-.324.262-.586.586-.586h13.789c.323 0 .586.262.586.586zM4.876 15.57a.625.625 0 100 1.25h2.75a.625.625 0 000-1.25h-2.75zM4.25 13.36c0-.345.28-.625.625-.625h9.583a.625.625 0 110 1.25H4.876a.625.625 0 01-.625-.625zm.833-7.875a.833.833 0 00-.833.834v2.5c0 .46.373.833.833.833h3.334c.46 0 .833-.373.833-.833v-2.5a.833.833 0 00-.833-.834H5.084z"
      fill="currentColor"
    />
    <path
      d="M18.134 6.691h3.28c.324 0 .587.263.587.586v7.527c0 4.557 0 4.697-.002 4.697a1.935 1.935 0 01-3.862.043c-.004 0-.004-.193-.004-4.904v-.01-7.939z"
      fill="currentColor"
    />
  </svg>
);
export default RolledSheetM;
