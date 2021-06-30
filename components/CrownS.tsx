import * as React from "react";

export const CrownS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M1.93 13.31c0-.312.252-.564.563-.564H13.53c.311 0 .563.252.563.563v.178a.563.563 0 01-.563.563H2.493a.563.563 0 01-.563-.563v-.178zm-.583-8.614a.563.563 0 01.843-.536l2.04 1.18a.563.563 0 00.707-.12l2.648-3.065a.563.563 0 01.853 0l2.647 3.066a.563.563 0 00.709.12l2.039-1.181a.563.563 0 01.843.536l-.538 6.232a.563.563 0 01-.561.514H2.447a.563.563 0 01-.562-.514l-.538-6.232z"
      fill="currentColor"
    />
  </svg>
);
export default CrownS;
