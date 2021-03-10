import * as React from "react";

export const PhotoCameraM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8 13.58c0-2.323 1.794-4.211 4-4.211.276 0 .5.236.5.526 0 .29-.224.527-.5.527-1.654 0-3 1.416-3 3.157 0 .291-.224.527-.5.527a.514.514 0 01-.5-.527z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5 5.158h3c1.93 0 3.5 1.653 3.5 3.684v9.474C24 20.347 22.43 22 20.5 22h-17C1.57 22 0 20.347 0 18.316V8.842c0-2.031 1.57-3.684 3.5-3.684h3a.504.504 0 00.475-.36l.316-.999C7.631 2.723 8.584 2 9.662 2h4.676c1.077 0 2.03.723 2.372 1.799l.316.999a.5.5 0 00.474.36zM6 13.578c0 3.484 2.691 6.317 6 6.317s6-2.833 6-6.316c0-3.483-2.691-6.316-6-6.316s-6 2.833-6 6.316z"
      fill="currentColor"
    />
  </svg>
);
export default PhotoCameraM;
