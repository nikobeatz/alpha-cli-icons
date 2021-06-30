import * as React from "react";

export const WalletS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11.687 3.65h-6.98l3.857-1.785a2.087 2.087 0 012.785 1.037l.338.748zM3.781 4.718A2.111 2.111 0 001.67 6.83v5.396c0 1.166.945 2.111 2.111 2.111h7.389a2.111 2.111 0 002.111-2.11v-.08a2.639 2.639 0 01-3.167-2.586v-.065a2.639 2.639 0 013.167-2.587V6.83a2.111 2.111 0 00-2.111-2.11H3.78z"
      fill="currentColor"
    />
    <path
      d="M12.753 7.924c-.874 0-1.583.71-1.583 1.584v.04a1.583 1.583 0 003.167 0v-.04c0-.875-.71-1.584-1.584-1.584z"
      fill="currentColor"
    />
  </svg>
);
export default WalletS;
