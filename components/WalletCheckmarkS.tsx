import React from "react";

export const WalletCheckmarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.102 4.386c-.441.183-.7.627-.665 1.082v2.328a3.523 3.523 0 013.26 3.45h5.945c.598 0 1.083-.486 1.083-1.084V5.47c0-.598-.485-1.083-1.083-1.083h-8.54zM9.58 9.53a1.715 1.715 0 100-3.43 1.715 1.715 0 000 3.43z"
      fill="currentColor"
    />
    <path
      d="M7.305 3.529h5.97l-.391-1.008a1.083 1.083 0 00-1.402-.617L7.305 3.529z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.057 11.304c0 1.59-1.293 2.88-2.886 2.88a2.883 2.883 0 01-2.886-2.88c0-1.59 1.292-2.88 2.886-2.88a2.883 2.883 0 012.886 2.88zm-1.699-.705a.406.406 0 01-.039.573l-1.275 1.113-1.022-.893a.406.406 0 11.534-.612l.488.427.741-.647a.406.406 0 01.573.039z"
      fill="currentColor"
    />
  </svg>
);
export default WalletCheckmarkS;
