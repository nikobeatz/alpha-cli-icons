import * as React from "react";

export const WalletCheckmarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.817 4.476c-.441.183-.7.627-.665 1.082v2.328a3.523 3.523 0 013.26 3.45h5.946c.598 0 1.082-.486 1.082-1.084V5.56c0-.598-.484-1.083-1.082-1.083h-8.54zm4.48 5.144a1.715 1.715 0 100-3.43 1.715 1.715 0 000 3.43z"
      fill="currentColor"
    />
    <path
      d="M7.02 3.619h5.971L12.6 2.61a1.083 1.083 0 00-1.402-.617L7.02 3.619z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.772 11.394c0 1.59-1.292 2.88-2.886 2.88A2.883 2.883 0 011 11.393c0-1.59 1.292-2.88 2.886-2.88a2.883 2.883 0 012.886 2.88zm-1.699-.705a.406.406 0 01-.038.573L3.76 12.375l-1.023-.893a.406.406 0 11.534-.612l.489.427.74-.647a.406.406 0 01.574.039z"
      fill="currentColor"
    />
  </svg>
);
export default WalletCheckmarkS;
