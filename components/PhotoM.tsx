import React from "react";

export const PhotoM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v24H0z" />
    <path
      d="M7.005 2a5 5 0 00-5 5v7.117l6.213-6.079 6.26 6.126 3.124-3.047 4.403 4.296V7a5 5 0 00-5-5h-10z"
      fill="currentColor"
    />
    <path
      d="M21.777 18.495l-4.175-4.074-1.432 1.397 4.586 4.488c.458-.52.81-1.134 1.021-1.81zM18.776 21.677L8.218 11.347 2.02 17.409A5 5 0 007.005 22h10a4.99 4.99 0 001.771-.323z"
      fill="currentColor"
    />
  </svg>
);
export default PhotoM;
