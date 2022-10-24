import * as React from "react";

export const OssetiaMColor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v25H0z" />
    <path
      d="M0 18.067c0 .992.805 1.797 1.797 1.797h20.406c.992 0 1.797-.805 1.797-1.797v-3.444H0v3.444z"
      fill="#FAB123"
    />
    <path
      d="M22.203 4.14H1.797C.805 4.14 0 4.945 0 5.937v3.444h24V5.937c0-.992-.805-1.797-1.797-1.797z"
      fill="#F5F5F5"
    />
    <path d="M24 9.381H0v5.241h24v-5.24z" fill="#D42020" />
  </svg>
);
export default OssetiaMColor;
