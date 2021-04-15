import * as React from "react";

export const KnifeS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.834 1.333l11.55 11.551a.96.96 0 11-1.359 1.36l-2.944-2.945-2.265 2.264-2.639-2.639v1.679a.64.64 0 01-1.281 0V10.04a.64.64 0 00-1.277-.075l-.004.075v.64a.64.64 0 11-1.281 0V5.054a5.11 5.11 0 011.388-3.605l.112-.115zM2.988 3.3l-.033.07a3.84 3.84 0 00-.334 1.348l-.006.198v.076c.007.951.367 1.865 1.011 2.565l.114.118 4.076 4.076L9.628 9.94 2.988 3.3z"
      fill="currentColor"
    />
  </svg>
);
export default KnifeS;
