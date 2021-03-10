import * as React from "react";

export const PieChartM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.063.03C5.843.03 0 5.858 0 13.06c0 .387.315.702.704.702h12.358a.703.703 0 00.704-.702V.732a.703.703 0 00-.704-.702zM8.055 15.791a.704.704 0 00-.617-.364H3.276a.704.704 0 00-.672.912c1.326 4.211 5.15 7.342 9.755 7.63v-5.261a5.709 5.709 0 01-4.304-2.917zM16.35 2.628a.706.706 0 00-.915.67v4.151c0 .257.14.493.366.616a5.694 5.694 0 012.924 4.292H24c-.29-4.603-3.438-8.41-7.65-9.729zM18.726 13.762a5.71 5.71 0 01-4.96 4.946v5.261c5.492-.345 9.888-4.722 10.234-10.207h-5.274z"
      fill="currentColor"
    />
  </svg>
);
export default PieChartM;
