import * as React from "react";

export const DiscountS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.6 6.097l.48.48c.38.373.586.88.586 1.413.007.534-.2 1.04-.573 1.42l-.02.02-.474.474a.999.999 0 00-.293.707v.686a2.01 2.01 0 01-2.007 2.007h-.687a.999.999 0 00-.707.293l-.48.48a1.997 1.997 0 01-1.421.587 2.02 2.02 0 01-1.42-.58l-.487-.487a.999.999 0 00-.707-.293h-.687a2.01 2.01 0 01-2.008-2.007v-.686c0-.267-.106-.52-.293-.714l-.48-.473a2.015 2.015 0 01-.007-2.84l.487-.487c.187-.187.293-.44.293-.713v-.68c0-1.107.9-2.006 2.008-2.006h.687a1 1 0 00.707-.294l.48-.48a2.012 2.012 0 012.84-.006l.488.486a1 1 0 00.707.294h.687c1.107 0 2.007.899 2.007 2.006v.687c0 .266.107.52.293.706zm-7.317 4.2c.16 0 .307-.06.414-.173l3.428-3.426a.588.588 0 000-.828.581.581 0 00-.82 0L5.876 9.297a.587.587 0 000 .827.555.555 0 00.406.173zm2.848-.587a.583.583 0 101.167.007.583.583 0 00-1.167-.007zm-2.84-4.006c.32 0 .58.26.58.58 0 .327-.26.586-.58.586a.587.587 0 01-.588-.586c0-.32.267-.58.587-.58z"
      fill="currentColor"
    />
  </svg>
);
export default DiscountS;