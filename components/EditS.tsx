import * as React from "react";

export const EditS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.752 4.986c.03.075.046.155.045.236l-.043.03a.427.427 0 010 .086.617.617 0 010 .148.73.73 0 01-.135.203l-1.746 1.71-6.684 6.72a.616.616 0 01-.467.178H2.115a.615.615 0 01-.615-.615v-2.607a.615.615 0 01.178-.437l6.72-6.72 1.74-1.74A.614.614 0 0110.576 2a.615.615 0 01.437.178l2.607 2.607a.615.615 0 01.133.2zM2.73 13.066h1.74l6.105-6.104-1.74-1.74-6.105 6.105v1.74zm6.972-8.711l1.74 1.74.867-.873-1.734-1.734-.873.867zm.018 8.692a.625.625 0 100 1.25h4.155a.625.625 0 100-1.25H9.72z"
      fill="currentColor"
    />
  </svg>
);
export default EditS;
