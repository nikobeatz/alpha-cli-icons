import * as React from "react";

export const LightningMarkM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.001 2c-5.521 0-10 4.479-10 10s4.479 10 10 10 10-4.479 10-10-4.479-10-10-10zm0 17.996c-4.409 0-7.996-3.587-7.996-7.996 0-4.409 3.587-7.996 7.996-7.996 4.409 0 7.996 3.587 7.996 7.996 0 4.409-3.587 7.996-7.996 7.996zm-3.758-6.493l4.51-8.517v5.511h3.005l-4.368 8.517v-5.511H8.242z"
      fill="currentColor"
    />
  </svg>
);
export default LightningMarkM;
