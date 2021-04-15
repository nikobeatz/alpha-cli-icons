import * as React from "react";

export const PhoneS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M14.317 11.119l-1.864-1.861c-.666-.665-1.798-.399-2.065.465-.2.598-.866.93-1.465.797-1.332-.332-3.13-2.06-3.463-3.455-.2-.598.2-1.263.8-1.462.865-.266 1.131-1.396.466-2.06L4.86 1.683c-.533-.466-1.332-.466-1.798 0L1.798 2.944c-1.266 1.329.133 4.85 3.263 7.974 3.13 3.124 6.659 4.586 7.99 3.256l1.266-1.262c.466-.532.466-1.33 0-1.794z"
      fill="currentColor"
    />
  </svg>
);
export default PhoneS;
