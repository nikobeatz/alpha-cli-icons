import * as React from "react";

export const TimerS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6.758 1.333a.87.87 0 000 1.74h.29v.869h1.739v-.87h.29a.87.87 0 100-1.739h-2.32z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.166 9.497a5.17 5.17 0 11-10.34 0 5.17 5.17 0 0110.34 0zm-5.84-2.91h.885v2.916l2.357 1.623-.501.728-2.513-1.73h-.227v-.157l-.173-.118.173-.25V6.587z"
      fill="currentColor"
    />
    <path
      d="M11.413 3.118a.556.556 0 00-.759.204l-.446.774 1.507.869.446-.775a.556.556 0 00-.204-.758l-.544-.314z"
      fill="currentColor"
    />
  </svg>
);
export default TimerS;
