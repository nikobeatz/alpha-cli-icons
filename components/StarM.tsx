import * as React from "react";

export const StarM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v25H0z" />
    <path
      d="M11.174 2.99a.906.906 0 011.652 0l2.228 4.963c.131.293.409.494.728.529l5.409.585a.906.906 0 01.51 1.571L17.67 14.29a.905.905 0 00-.279.857l1.115 5.324a.906.906 0 01-1.337.972l-4.719-2.706a.906.906 0 00-.9 0l-4.72 2.706a.906.906 0 01-1.336-.972l1.115-5.324a.906.906 0 00-.279-.857L2.3 10.638a.906.906 0 01.51-1.571l5.409-.585a.906.906 0 00.728-.53l2.228-4.962z"
      fill="currentColor"
    />
  </svg>
);
export default StarM;
