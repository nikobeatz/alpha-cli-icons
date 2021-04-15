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
    <path d="M0 0h16v16H0z" />
    <path
      d="M7.45 1.983a.604.604 0 011.1 0l1.486 3.309c.087.195.272.33.486.353l3.605.39a.604.604 0 01.34 1.047L11.78 9.517a.604.604 0 00-.186.571l.744 3.55a.604.604 0 01-.892.647L8.3 12.481a.603.603 0 00-.6 0l-3.146 1.804a.604.604 0 01-.892-.647l.744-3.55a.604.604 0 00-.186-.571L1.532 7.082a.604.604 0 01.34-1.047l3.606-.39a.604.604 0 00.486-.353L7.45 1.983z"
      fill="currentColor"
    />
  </svg>
);
export default StarS;
