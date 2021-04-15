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
    <path d="M0 0h16v16H0z" />
    <path
      d="M1.918 13.35c0-.312.253-.564.564-.564h11.037c.31 0 .563.252.563.563v.178a.563.563 0 01-.563.563H2.482a.563.563 0 01-.564-.563v-.178zm-.582-8.615a.563.563 0 01.843-.535l2.039 1.18a.563.563 0 00.708-.12l2.648-3.065a.563.563 0 01.852 0l2.648 3.066a.563.563 0 00.709.12L13.82 4.2a.563.563 0 01.844.535l-.539 6.232a.563.563 0 01-.56.515H2.434a.563.563 0 01-.561-.514l-.538-6.233z"
      fill="currentColor"
    />
  </svg>
);
export default CrownS;
