import * as React from "react";

export const SkullFilledS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.003 1.333a6.35 6.35 0 016.35 6.35v2.39a1.27 1.27 0 01-.702 1.135l-1.838.919v.635a1.905 1.905 0 01-1.793 1.902l-.143.003c.014-.07.023-.14.028-.21l.003-.108v-.317a1.27 1.27 0 00-1.174-1.267l-.096-.003h-1.27a1.27 1.27 0 00-1.267 1.175l-.003.095v.317c0 .109.011.215.032.318h-.032a1.905 1.905 0 01-1.905-1.905v-.635l-1.837-.919a1.27 1.27 0 01-.703-1.136v-2.39a6.35 6.35 0 016.35-6.349zm-2.54 5.715a1.27 1.27 0 100 2.54 1.27 1.27 0 000-2.54zm5.08 0a1.27 1.27 0 100 2.54 1.27 1.27 0 000-2.54z"
      fill="currentColor"
    />
  </svg>
);
export default SkullFilledS;
