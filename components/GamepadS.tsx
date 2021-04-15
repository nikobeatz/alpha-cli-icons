import * as React from "react";

export const GamepadS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.11 4.055l.631.008c2.27 0 3.926 1.618 3.926 3.854v2.87c0 2.236-1.655 3.854-3.926 3.854-.909.02-1.818.026-2.734.026-.916 0-1.839-.007-2.748-.026-2.27 0-3.926-1.618-3.926-3.854v-2.87c0-2.236 1.656-3.854 3.932-3.854a174.34 174.34 0 012.624-.026v-.109a.815.815 0 00-.818-.803h-.648c-.739 0-1.34-.59-1.34-1.31a.49.49 0 01.49-.482c.275 0 .49.219.49.482 0 .193.164.347.36.347h.648c.988.006 1.793.796 1.8 1.76v.122c.412 0 .824.005 1.239.011zM7.235 9.831h-.687v.68a.49.49 0 01-.49.482.486.486 0 01-.492-.482v-.68h-.693a.486.486 0 01-.49-.482.49.49 0 01.49-.482h.693v-.674c0-.264.216-.482.491-.482a.49.49 0 01.49.482v.674h.688a.49.49 0 01.49.482c0 .27-.222.482-.49.482zm2.78-1.086h.066c.268 0 .49-.212.49-.482a.49.49 0 00-.49-.481h-.066a.482.482 0 100 .963zm1.119 2.21h.065c.269 0 .491-.213.491-.482a.49.49 0 00-.49-.482h-.066a.481.481 0 100 .963z"
      fill="currentColor"
    />
  </svg>
);
export default GamepadS;