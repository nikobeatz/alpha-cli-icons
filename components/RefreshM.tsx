import React from "react";

export const RefreshM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v24H0z" />
    <path
      d="M12.306 2.293a1.05 1.05 0 011.456 0l3.088 3a.98.98 0 010 1.414l-3.088 3c-.402.39-1.054.39-1.456 0a.98.98 0 010-1.414L13.637 7h-1.632c-3.652 0-6.691 2.952-6.691 6.5s3.039 6.5 6.69 6.5c3.653 0 6.692-2.952 6.692-6.5 0-.552.46-1 1.03-1 .568 0 1.029.448 1.029 1 0 4.652-3.961 8.5-8.75 8.5-4.79 0-8.75-3.848-8.75-8.5S7.215 5 12.005 5h1.632l-1.33-1.293a.98.98 0 010-1.414z"
      fill="currentColor"
    />
  </svg>
);
export default RefreshM;
