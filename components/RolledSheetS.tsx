import * as React from "react";

export const RolledSheetS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v17H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.314 2.15v10.886c0 .44.146.845.391 1.172H3.293a1.955 1.955 0 01-1.953-1.953V2.15a.39.39 0 01.39-.391h9.193a.39.39 0 01.39.39zm-8.058 8.236a.417.417 0 000 .834H5.09a.417.417 0 000-.834H3.256zM2.84 8.914c0-.23.186-.417.416-.417h6.39a.417.417 0 010 .834h-6.39a.417.417 0 01-.416-.417zm.555-5.25a.556.556 0 00-.555.556v1.666c0 .307.249.556.555.556h2.223a.556.556 0 00.555-.556V4.22a.556.556 0 00-.555-.556H3.395z"
      fill="currentColor"
    />
    <path
      d="M12.095 4.468h2.187a.39.39 0 01.391.39v5.018l-.001 3.131a1.29 1.29 0 01-2.575.029c-.002 0-.002-.129-.002-3.27V9.76 4.468z"
      fill="currentColor"
    />
  </svg>
);
export default RolledSheetS;
