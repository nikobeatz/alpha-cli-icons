import * as React from "react";

export const PhotoCameraM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.671 13.31c0-1.936 1.495-3.51 3.334-3.51.23 0 .416.197.416.44a.428.428 0 01-.416.438c-1.379 0-2.5 1.18-2.5 2.632a.428.428 0 01-.417.438.428.428 0 01-.417-.438z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.588 6.292h2.5c1.609 0 2.917 1.377 2.917 3.07v7.894c0 1.694-1.308 3.07-2.917 3.07H4.922c-1.609 0-2.917-1.377-2.917-3.07V9.362c0-1.693 1.308-3.07 2.917-3.07h2.5a.42.42 0 00.395-.3l.264-.833c.283-.896 1.077-1.499 1.976-1.499h3.896c.898 0 1.692.603 1.977 1.5l.263.832c.057.18.215.3.395.3zm-9.583 7.017c0 2.903 2.242 5.263 5 5.263 2.757 0 5-2.36 5-5.263 0-2.902-2.243-5.263-5-5.263-2.758 0-5 2.36-5 5.263z"
      fill="currentColor"
    />
  </svg>
);
export default PhotoCameraM;
