import * as React from "react";

export const CupS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h16v16H0z" />
    <path d="M6 1.333h-.667v2H6v-2z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.8 4h-9a.604.604 0 00-.424.173.589.589 0 00-.176.42v5.333c0 .629.253 1.231.703 1.676.45.444 1.06.694 1.697.694h3.6c.637 0 1.247-.25 1.697-.694.45-.445.703-1.047.703-1.676V8.148h1.2c.318 0 .624-.125.849-.347.225-.222.351-.524.351-.838V5.185c0-.314-.126-.616-.351-.838A1.207 1.207 0 0012.8 4zm-1.2 2.963V5.185h1.2v1.778h-1.2z"
      fill="currentColor"
    />
    <path
      d="M12.8 13.482H2v1.185h10.8v-1.185zM7.333 1.333H8v2h-.667v-2zM10 1.333h-.667v2H10v-2z"
      fill="currentColor"
    />
  </svg>
);
export default CupS;
