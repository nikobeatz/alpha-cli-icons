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
    <path d="M0 0h16v16H0z" />
    <path
      d="M11.682 3.647H4.704L8.56 1.862a2.087 2.087 0 012.784 1.037l.338.748zM3.777 4.715a2.111 2.111 0 00-2.111 2.111v5.396c0 1.166.945 2.111 2.11 2.111h7.39a2.111 2.111 0 002.11-2.11v-.08a2.639 2.639 0 01-3.167-2.586v-.066a2.639 2.639 0 013.168-2.586v-.079a2.111 2.111 0 00-2.111-2.11h-7.39z"
      fill="currentColor"
    />
    <path
      d="M12.749 7.921c-.875 0-1.584.71-1.584 1.584v.039a1.583 1.583 0 003.167 0v-.04c0-.874-.709-1.583-1.583-1.583z"
      fill="currentColor"
    />
  </svg>
);
export default WalletS;
