import * as React from "react";

export const ShoppingCartM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.83 9.62h-1.905V6.761H9.068V4.857h2.857V2h1.904v2.857h2.858v1.905h-2.858v2.857zM6.22 20.095c0-1.047.848-1.904 1.895-1.904a1.91 1.91 0 011.905 1.904A1.91 1.91 0 018.115 22a1.902 1.902 0 01-1.895-1.905zM17.64 18.19a1.902 1.902 0 00-1.896 1.905c0 1.048.848 1.905 1.895 1.905a1.91 1.91 0 001.905-1.905 1.91 1.91 0 00-1.905-1.904z"
      fill="currentColor"
    />
    <path
      d="M16.258 13.429H9.163l-1.048 1.905h11.429v1.904H8.115c-1.447 0-2.362-1.552-1.666-2.828l1.285-2.324-3.428-7.229H2.4V2.953h3.114l4.057 8.571h6.686l3.686-6.667 1.657.915-3.676 6.676c-.324.59-.953.98-1.667.98z"
      fill="currentColor"
    />
  </svg>
);
export default ShoppingCartM;
