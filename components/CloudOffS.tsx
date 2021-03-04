import * as React from "react";

const CloudOffS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <g clipPath="url(#prefix__clip0)" fill="currentColor">
      <path d="M8.9 21c-3.3 0-6.3-1.8-7.9-4.6-1.2-2.1-1.4-4.5-.8-6.8.7-2.3 2.2-4.2 4.3-5.4.5-.3 1.1-.2 1.4.3.2.5.1 1.1-.4 1.4-1.6.9-2.8 2.4-3.3 4.2-.5 1.8-.3 3.7.6 5.3C4 17.7 6.4 19.1 9 19h9c.5 0 .9-.1 1.4-.2.5-.2 1.1.1 1.3.6.2.5-.1 1.1-.6 1.3-.7.2-1.3.4-2 .4H9c0-.1-.1-.1-.1-.1zm13.7-3c-.1 0-.3 0-.4-.1-.5-.2-.7-.8-.5-1.3.9-2-.1-4.4-2.1-5.2-.5-.2-1-.3-1.6-.3h-1.3c-.5 0-.9-.3-1-.8-.7-2.9-3.1-5-6.1-5.3-.6 0-1-.5-.9-1.1 0-.5.5-1 1.1-.9 3.5.3 6.5 2.7 7.7 6h.5c.8 0 1.6.2 2.3.5 3 1.3 4.5 4.8 3.2 7.9-.1.3-.5.6-.9.6z" />
      <path d="M23 24c-.3 0-.5-.1-.7-.3l-22-22C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l22 22c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z" />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default CloudOffS;
