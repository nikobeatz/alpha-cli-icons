import * as React from "react";

export const AusM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M22.2026 4.14001H1.79742C0.804703 4.14001 0 4.94472 0 5.93744V9.38139H24V5.93744C24 4.94472 23.1953 4.14001 22.2026 4.14001Z"
      fill="#D42020"
    />
    <path
      d="M0 18.0667C0 19.0594 0.804703 19.8641 1.79742 19.8641H22.2026C23.1952 19.8641 24 19.0594 24 18.0667V14.6227H0V18.0667Z"
      fill="#D42020"
    />
    <path d="M24 9.38129H0V14.6224H24V9.38129Z" fill="#F5F5F5" />
  </svg>
);
export default AusM;
