import * as React from "react";

export const TicketM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.63 5.465h5.346v13.084H2.63c-.347 0-.629-.309-.629-.69v-3.502c0-.381.282-.69.63-.69.833 0 1.511-.745 1.511-1.66 0-.915-.678-1.66-1.512-1.66-.347 0-.629-.308-.629-.69V6.156c0-.382.282-.691.63-.691zM22 9.657c0 .382-.282.69-.63.69-.833 0-1.511.745-1.511 1.66 0 .915.678 1.66 1.512 1.66.347 0 .629.309.629.69v3.502c0 .381-.282.69-.63.69H9.235V5.466h12.137c.347 0 .629.31.629.69v3.502z"
      fill="currentColor"
    />
  </svg>
);
export default TicketM;
