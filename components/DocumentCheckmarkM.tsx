import * as React from "react";

export const DocumentCheckmarkM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12.543 4.617c0 .425.344.77.77.77h4.617v4.415a8.08 8.08 0 00-8.457 11.746H3.308a2.309 2.309 0 01-2.309-2.309V2.31A2.309 2.309 0 013.308 0h9.235v4.617z"
      fill="currentColor"
    />
    <path d="M14.082.452V3.85h3.396L14.081.452z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.999 17.776a6.38 6.38 0 11-12.759 0 6.38 6.38 0 0112.759 0zm-3.5-1.796a.553.553 0 00-.783-.014l-2.459 2.375-1.852-1.554a.541.541 0 00-.695.83l2.604 2.185.006-.008.012.013 3.153-3.045a.553.553 0 00.014-.782z"
      fill="currentColor"
    />
  </svg>
);
export default DocumentCheckmarkM;
