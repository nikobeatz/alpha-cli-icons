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
    <path d="M0 0h16v16H0z" />
    <path
      d="M2.693 2.554h5.506c.246 0 .446.2.446.446v5.952c0 .247-.2.447-.446.447H2.693v4.723c0 .247-.2.545-.447.545-.246 0-.446-.298-.446-.545V1.78a.446.446 0 01.893 0v.774z"
      fill="currentColor"
    />
    <path
      d="M13.144 7.464l1.124 2.81a.446.446 0 01-.415.613H6.71a.446.446 0 01-.446-.447v-.148h1.934c.739 0 1.34-.601 1.34-1.34v-4.91h4.315a.446.446 0 01.415.612l-1.124 2.81z"
      fill="currentColor"
    />
  </svg>
);
export default FlagpoleFilledS;
