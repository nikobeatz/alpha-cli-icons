import * as React from "react";

export const GiftM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M20.844 12.656a1 1 0 011 1V23a1 1 0 01-1 1H3.156a1 1 0 01-1-1v-9.344a1 1 0 011-1h5.031a1 1 0 011 1v1.961a1 1 0 001.555.832l.703-.468a1 1 0 011.11 0l.703.468a1 1 0 001.555-.832v-1.96a1 1 0 011-1h5.03zM.75 8.031a1 1 0 011-1h6.438a1 1 0 011 1v2.22a1 1 0 01-1 1H1.75a1 1 0 01-1-1V8.03zM14.813 8.031a1 1 0 011-1h6.437a1 1 0 011 1v2.22a1 1 0 01-1 1h-6.438a1 1 0 01-1-1V8.03zM21.844 3.516c0 .79-.263 1.521-.705 2.11h-6.326V2.374C15.964.797 17.183 0 18.456 0h.017c2.026.012 3.37 2.123 3.37 3.516zM9.188 2.374v3.251H2.86a3.496 3.496 0 01-.705-2.11C2.156 2.124 3.501.013 5.527 0c1.277-.008 2.503.79 3.66 2.374z"
      fill="currentColor"
    />
    <path
      d="M10.594 4.219h2.812v10.64L12 13.92l-1.406.937V4.218z"
      fill="currentColor"
    />
  </svg>
);
export default GiftM;
