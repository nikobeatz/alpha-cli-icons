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
    <path d="M0 0h16v16H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.307 2.144v10.885c0 .44.146.845.392 1.172H3.287a1.955 1.955 0 01-1.954-1.953V2.144a.39.39 0 01.391-.39h9.193a.39.39 0 01.39.39zM3.25 10.38a.417.417 0 000 .833h1.833a.417.417 0 000-.833H3.25zm-.417-1.473c0-.23.187-.416.417-.416H9.64a.417.417 0 010 .833H3.25a.417.417 0 01-.417-.417zm.556-5.25a.556.556 0 00-.556.556V5.88c0 .307.25.555.556.555h2.222a.556.556 0 00.556-.555V4.213a.556.556 0 00-.556-.556H3.39z"
      fill="currentColor"
    />
    <path
      d="M12.089 4.461h2.187a.39.39 0 01.39.39v8.15a1.29 1.29 0 01-2.575.028c-.003 0-.003-.128-.003-3.27v-.005V4.46z"
      fill="currentColor"
    />
  </svg>
);
export default RolledSheetS;
