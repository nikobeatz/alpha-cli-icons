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
    <path d="M0 0h17v16H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.606 6.104l.48.48c.38.373.587.88.587 1.413.007.533-.2 1.04-.573 1.42l-.02.02-.474.473a1 1 0 00-.293.708v.686a2.01 2.01 0 01-2.008 2.007h-.687a.999.999 0 00-.706.293l-.48.48a1.997 1.997 0 01-1.421.586 2.02 2.02 0 01-1.42-.58l-.488-.486a.999.999 0 00-.706-.293H4.71a2.01 2.01 0 01-2.008-2.007v-.686c0-.268-.106-.521-.293-.714l-.48-.474a2.015 2.015 0 01-.007-2.84l.487-.486c.187-.187.293-.44.293-.714v-.68c0-1.106.9-2.006 2.008-2.006h.687a1 1 0 00.706-.294l.48-.48a2.012 2.012 0 012.842-.006l.487.486a1 1 0 00.706.294h.687c1.107 0 2.008.9 2.008 2.006v.688c0 .266.106.519.293.706zm-7.316 4.2c.16 0 .307-.06.414-.174l3.428-3.426a.588.588 0 000-.827.581.581 0 00-.82 0L5.882 9.304a.587.587 0 000 .826.555.555 0 00.407.174zm2.848-.587a.583.583 0 101.167.007.583.583 0 00-1.167-.007zM6.297 5.71c.32 0 .58.26.58.58 0 .328-.26.587-.58.587a.587.587 0 01-.587-.587c0-.32.267-.58.587-.58z"
      fill="currentColor"
    />
  </svg>
);
export default DiscountS;
