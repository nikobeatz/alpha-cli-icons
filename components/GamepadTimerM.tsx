import * as React from "react";

export const GamepadTimerM = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.79 8.824l-.556-.007c-.53-.007-1.059-.014-1.587-.014v-.157C9.64 7.413 8.61 6.402 7.344 6.394h-.829a.454.454 0 01-.46-.444.622.622 0 00-.628-.617.627.627 0 00-.629.617c0 .92.77 1.677 1.717 1.677h.83c.569 0 1.046.46 1.046 1.028v.14c-1.139 0-2.261.016-3.358.032C2.119 8.827 0 10.9 0 13.76v3.675c0 2.86 2.119 4.932 5.025 4.932 1.164.025 2.344.033 3.517.033 1.172 0 2.336-.008 3.5-.033 2.906 0 5.025-2.072 5.025-4.932v-3.592a5.87 5.87 0 01-5.276-5.019zM6.675 16.21h.88a.622.622 0 00.628-.617.627.627 0 00-.628-.616h-.88v-.864a.627.627 0 00-.628-.616.622.622 0 00-.628.617v.863H4.53a.627.627 0 00-.628.616c0 .345.285.617.628.617h.888v.871c0 .337.276.617.628.617.343 0 .628-.28.628-.617v-.871zm4.522-1.39h-.083a.616.616 0 110-1.233h.083c.344 0 .628.28.628.617a.622.622 0 01-.628.616zm1.432 2.829h-.083a.616.616 0 110-1.233h.083c.344 0 .628.28.628.616a.622.622 0 01-.628.617zM24 6.933a5.333 5.333 0 11-10.667 0 5.333 5.333 0 0110.667 0zm-5.867-2.666H19.2v2.817l1.96 1.35-.522.759-2.505-1.725.002-.001h-.002v-3.2z"
      fill="currentColor"
    />
  </svg>
);
export default GamepadTimerM;