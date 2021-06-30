import * as React from "react";

export const PersonPlusS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M9.699 5.285c0-1.5-1.248-2.715-2.788-2.715-1.54 0-2.788 1.215-2.788 2.715 0 1.5 1.247 2.716 2.788 2.716 1.54 0 2.788-1.216 2.788-2.716zm1.393 1.358V8h2.091v2.036h1.394V8.001h2.091V6.643h-2.09V4.606h-1.395v2.037h-2.09zm-9.757 5.43v1.358h11.151v-1.357c0-1.806-3.714-2.716-5.575-2.716-1.861 0-5.576.91-5.576 2.715z"
      fill="currentColor"
    />
  </svg>
);
export default PersonPlusS;
