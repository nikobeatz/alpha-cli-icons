import * as React from "react";

export const RefreshM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12.252 2.293a1.05 1.05 0 011.456 0l3.089 3a.98.98 0 010 1.414l-3.089 3c-.402.39-1.054.39-1.456 0a.98.98 0 010-1.414L13.583 7h-1.632C8.299 7 5.26 9.952 5.26 13.5S8.299 20 11.95 20c3.653 0 6.692-2.952 6.692-6.5 0-.552.461-1 1.03-1 .568 0 1.029.448 1.029 1 0 4.652-3.961 8.5-8.75 8.5-4.79 0-8.75-3.848-8.75-8.5S7.16 5 11.95 5h1.632l-1.33-1.293a.98.98 0 010-1.414z"
      fill="currentColor"
    />
  </svg>
);
export default RefreshM;
