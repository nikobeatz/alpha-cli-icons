import * as React from "react";

export const RemoteControllerS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.605 11.151c0 .219.172.39.39.39.22 0 .391-.171.391-.39a.387.387 0 00-.39-.39.387.387 0 00-.391.39z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.87 1.333h6.25a.39.39 0 01.391.39v9.428a3.52 3.52 0 01-3.515 3.516A3.52 3.52 0 014.48 11.15V1.724a.39.39 0 01.39-.39zm1.172 9.818a1.954 1.954 0 113.908.001 1.954 1.954 0 01-3.908-.001zm.782-6.276a.39.39 0 11-.782 0 .39.39 0 01.782 0zm1.562 0a.39.39 0 11-.781 0 .39.39 0 01.781 0zm.781 0a.39.39 0 11.782 0 .39.39 0 01-.782 0zM6.824 3.312a.39.39 0 11-.782 0 .39.39 0 01.782 0zm3.125 0a.39.39 0 11-.782 0 .39.39 0 01.782 0zm-.782 3.125a.39.39 0 11.782 0 .39.39 0 01-.782 0zm-.78 0a.39.39 0 11-.782 0 .39.39 0 01.781 0zm-1.563 0a.39.39 0 11-.782 0 .39.39 0 01.782 0zm.39 1.954h-.78a.39.39 0 110-.782h.78a.39.39 0 110 .782zM8.386 8a.39.39 0 01.39-.39h.782a.39.39 0 110 .78h-.781a.39.39 0 01-.39-.39z"
      fill="currentColor"
    />
  </svg>
);
export default RemoteControllerS;
