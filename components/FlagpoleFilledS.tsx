import * as React from "react";

export const FlagpoleFilledS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.648 2.56h5.506c.246 0 .446.2.446.447v5.952c0 .247-.2.446-.446.446H2.648v4.724c0 .247-.2.544-.447.544-.246 0-.446-.297-.446-.544V1.786a.446.446 0 01.893 0v.774z"
      fill="currentColor"
    />
    <path
      d="M13.099 7.471l1.124 2.81a.446.446 0 01-.415.613H6.665a.446.446 0 01-.446-.447v-.149h1.934c.739 0 1.34-.6 1.34-1.339V4.05h4.315a.446.446 0 01.415.612l-1.124 2.81z"
      fill="currentColor"
    />
  </svg>
);
export default FlagpoleFilledS;
