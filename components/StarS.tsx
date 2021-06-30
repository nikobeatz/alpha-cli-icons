import * as React from "react";

export const StarS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v16H0z" />
    <path
      d="M7.46 1.987a.604.604 0 011.102 0l1.485 3.308c.088.196.273.33.486.353l3.606.39a.604.604 0 01.34 1.048L11.79 9.52a.604.604 0 00-.185.572l.743 3.549a.604.604 0 01-.891.647l-3.146-1.803a.603.603 0 00-.6 0l-3.147 1.803a.604.604 0 01-.891-.647l.743-3.55a.604.604 0 00-.185-.57L1.544 7.085a.604.604 0 01.34-1.048l3.606-.39a.604.604 0 00.486-.353L7.46 1.987z"
      fill="currentColor"
    />
  </svg>
);
export default StarS;
