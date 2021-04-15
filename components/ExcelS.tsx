import * as React from "react";

export const ExcelS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.405 2.432l7.682-1.096a.306.306 0 01.349.303V14.36a.305.305 0 01-.349.303l-7.682-1.096a.611.611 0 01-.525-.604V3.036a.61.61 0 01.525-.604zm.698 1.134v8.868l6.11.872V2.694l-6.11.872zm7.944 8.706h1.833V3.728h-1.833V2.507h2.444a.611.611 0 01.611.61v9.766a.61.61 0 01-.611.61h-2.444v-1.22zM6.89 8l1.711 2.441H7.136l-.978-1.395-.978 1.395H3.714L5.424 8l-1.71-2.441H5.18l.978 1.395.978-1.395h1.466L6.892 8z"
      fill="currentColor"
    />
  </svg>
);
export default ExcelS;
