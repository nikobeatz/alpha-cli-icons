import * as React from "react";

export const InfoMarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12.714 3.286A6.623 6.623 0 008 1.333c-1.78 0-3.455.694-4.714 1.953A6.623 6.623 0 001.333 8c0 1.78.694 3.455 1.953 4.714A6.623 6.623 0 008 14.667c1.78 0 3.455-.694 4.714-1.953A6.623 6.623 0 0014.667 8c0-1.78-.694-3.455-1.953-4.714zM8 3.156c.79 0 1.432.643 1.432 1.433S8.79 6.02 8 6.02c-.79 0-1.432-.643-1.432-1.432 0-.79.642-1.433 1.432-1.433zm1.823 9.115H6.177v-.781h.781V7.583h-.781v-.78h2.865v4.687h.78v.78z"
      fill="currentColor"
    />
  </svg>
);
export default InfoMarkS;
