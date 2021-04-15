import * as React from "react";

export const DocumentArrowS = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.492 1.333c-.64 0-1.159.519-1.159 1.159v11.016c0 .64.52 1.159 1.159 1.159h6.1a4.763 4.763 0 012.265-8.52V2.491c0-.64-.518-1.159-1.158-1.159H2.492zm6.026 0V2.66c0 .56.454 1.014 1.013 1.014h1.326v-.87H9.53a.145.145 0 01-.145-.144V1.333h-.868zM2.546 7.85c0-.251.203-.455.454-.455h1.515a.455.455 0 010 .91H3a.455.455 0 01-.454-.455zM3 4.969a.455.455 0 100 .91h3.333a.455.455 0 000-.91H3z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.48 14.463a3.58 3.58 0 100-7.161 3.58 3.58 0 000 7.161zm.243-5.185a.28.28 0 01.395.034l1.082 1.29a.28.28 0 01.066.191.28.28 0 01-.066.192l-1.082 1.29a.28.28 0 11-.43-.36l.712-.85H9.493a.28.28 0 110-.56h2.893l-.698-.832a.28.28 0 01.035-.395z"
      fill="currentColor"
    />
  </svg>
);
export default DocumentArrowS;
