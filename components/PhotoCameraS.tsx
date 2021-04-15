import * as React from "react";

export const PhotoCameraS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M5.778 9.1c0-1.29.996-2.34 2.222-2.34.153 0 .278.132.278.293A.285.285 0 018 7.345c-.919 0-1.667.787-1.667 1.755a.285.285 0 01-.277.292.285.285 0 01-.278-.292z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.056 4.421h1.666c1.073 0 1.945.918 1.945 2.047v5.263c0 1.129-.872 2.047-1.945 2.047H3.278c-1.072 0-1.945-.918-1.945-2.047V6.468c0-1.129.873-2.047 1.945-2.047h1.667a.28.28 0 00.263-.2l.176-.555c.189-.598.718-1 1.317-1H9.3c.598 0 1.128.402 1.318 1l.175.555c.038.12.144.2.264.2zm-6.39 4.678c0 1.935 1.496 3.51 3.334 3.51s3.334-1.575 3.334-3.51c0-1.935-1.495-3.508-3.334-3.508-1.838 0-3.333 1.573-3.333 3.508z"
      fill="currentColor"
    />
  </svg>
);
export default PhotoCameraS;
