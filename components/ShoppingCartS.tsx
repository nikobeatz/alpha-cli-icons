import * as React from "react";

export const ShoppingCartS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M9.22 6.413H7.95V4.508H6.044v-1.27h1.904V1.333h1.27v1.905h1.905v1.27H9.219v1.905zM4.146 13.397c0-.699.565-1.27 1.264-1.27.698 0 1.27.571 1.27 1.27 0 .698-.572 1.27-1.27 1.27a1.268 1.268 0 01-1.264-1.27zM11.759 12.127c-.698 0-1.264.571-1.264 1.27 0 .698.566 1.27 1.264 1.27.698 0 1.27-.572 1.27-1.27 0-.699-.572-1.27-1.27-1.27z"
      fill="currentColor"
    />
    <path
      d="M10.838 8.953h-4.73l-.698 1.27h7.619v1.27h-7.62c-.964 0-1.574-1.036-1.11-1.887l.857-1.549L2.87 3.238H1.6v-1.27h2.076l2.705 5.715h4.457l2.457-4.445 1.105.61-2.45 4.45a1.264 1.264 0 01-1.112.655z"
      fill="currentColor"
    />
  </svg>
);
export default ShoppingCartS;
