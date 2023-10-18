import React from "react";

export const GamepadM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.169 6.083l.948.011c3.405 0 5.888 2.428 5.888 5.78v4.307c0 3.353-2.483 5.78-5.888 5.78a193.5 193.5 0 01-4.102.039c-1.374 0-2.758-.01-4.122-.038-3.405 0-5.888-2.428-5.888-5.78v-4.307c0-3.353 2.483-5.78 5.898-5.78 1.285-.02 2.6-.04 3.935-.04v-.163c0-.665-.56-1.204-1.227-1.204H9.64c-1.11 0-2.012-.886-2.012-1.965 0-.395.334-.723.736-.723.412 0 .736.328.736.723 0 .289.245.52.54.52h.971c1.482.01 2.69 1.194 2.7 2.64v.183c.618 0 1.236.008 1.858.017zm-4.312 8.663h-1.03v1.02a.735.735 0 01-.737.723.728.728 0 01-.736-.722v-1.021h-1.04a.728.728 0 01-.736-.723c0-.395.334-.722.736-.722h1.04v-1.012c0-.395.324-.723.736-.723.403 0 .736.328.736.723v1.012h1.03c.403 0 .737.327.737.722a.728.728 0 01-.736.723zm4.17-1.628h.099a.728.728 0 00.736-.723.735.735 0 00-.736-.723h-.098a.722.722 0 100 1.445zm1.679 3.314h.098a.728.728 0 00.736-.723.735.735 0 00-.736-.722h-.098a.722.722 0 100 1.445z"
      fill="currentColor"
    />
  </svg>
);
export default GamepadM;
