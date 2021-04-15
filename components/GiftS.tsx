import * as React from "react";

export const GiftS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12.91 8.365c.307 0 .555.248.555.555v5.191a.556.556 0 01-.555.556H3.083a.556.556 0 01-.555-.556v-5.19c0-.308.249-.556.555-.556H5.88c.306 0 .555.248.555.555v1.09c0 .443.495.708.864.462l.39-.26a.556.556 0 01.617 0l.39.26a.556.556 0 00.864-.462V8.92c0-.307.249-.555.556-.555h2.795zM1.747 5.795c0-.307.248-.555.555-.555H5.88c.306 0 .555.248.555.555v1.233a.556.556 0 01-.555.555H2.302a.556.556 0 01-.555-.555V5.795zM9.559 5.795c0-.307.249-.555.556-.555h3.576c.307 0 .555.248.555.555v1.233a.556.556 0 01-.555.555h-3.576a.556.556 0 01-.556-.555V5.795zM13.465 3.286c0 .44-.146.846-.391 1.172H9.559V2.653c.64-.877 1.318-1.32 2.024-1.32h.01c1.125.007 1.872 1.18 1.872 1.953zM6.434 2.652v1.806H2.92a1.942 1.942 0 01-.391-1.172c0-.773.747-1.946 1.873-1.953.71-.004 1.39.439 2.033 1.32z"
      fill="currentColor"
    />
    <path
      d="M7.215 3.677h1.563v5.91l-.781-.52-.782.52v-5.91z"
      fill="currentColor"
    />
  </svg>
);
export default GiftS;