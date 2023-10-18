import React from "react";

export const InfoMarkS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v17H0z" />
    <path
      d="M12.736 3.293A6.623 6.623 0 008.022 1.34c-1.781 0-3.455.693-4.714 1.953a6.623 6.623 0 00-1.953 4.714c0 1.78.693 3.454 1.953 4.714a6.623 6.623 0 004.714 1.952c1.78 0 3.454-.693 4.714-1.952a6.623 6.623 0 001.952-4.714c0-1.781-.693-3.455-1.952-4.714zm-4.714-.13c.79 0 1.432.642 1.432 1.432 0 .79-.643 1.433-1.432 1.433-.79 0-1.433-.643-1.433-1.433s.643-1.432 1.433-1.432zm1.823 9.114H6.199v-.78h.781V7.59h-.781v-.781h2.864v4.687h.782v.781z"
      fill="currentColor"
    />
  </svg>
);
export default InfoMarkS;
