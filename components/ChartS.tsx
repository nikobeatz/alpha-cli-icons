import * as React from "react";

export const ChartS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M1.606 8.906c0-.306.249-.555.556-.555h.308c.307 0 .556.249.556.555v5.205a.556.556 0 01-.556.556h-.308a.556.556 0 01-.556-.556V8.906zM12.964 6.1c0-.306.249-.555.556-.555h.308c.307 0 .556.249.556.555v8.012a.556.556 0 01-.556.556h-.308a.556.556 0 01-.556-.556V6.1zM7.285 1.89c0-.307.249-.556.556-.556h.308c.307 0 .556.25.556.556V14.11a.556.556 0 01-.556.556h-.308a.556.556 0 01-.556-.556V1.89z"
      fill="currentColor"
    />
  </svg>
);
export default ChartS;
