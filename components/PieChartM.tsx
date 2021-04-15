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
      d="M12.886 2C6.87 2 2.001 6.856 2.001 12.858c0 .323.263.585.586.585h10.3a.586.586 0 00.586-.585V2.585A.586.586 0 0012.886 2zM8.714 15.134a.587.587 0 00-.515-.304H4.731a.587.587 0 00-.56.76 9.134 9.134 0 008.129 6.36v-4.385a4.758 4.758 0 01-3.586-2.43zM15.626 4.165a.588.588 0 00-.762.558v3.46c0 .213.116.41.304.513a4.745 4.745 0 012.437 3.577H22c-.242-3.837-2.865-7.009-6.375-8.108zM17.606 13.443a4.759 4.759 0 01-4.133 4.122v4.384c4.576-.287 8.24-3.935 8.528-8.506h-4.395z"
      fill="currentColor"
    />
  </svg>
);
export default PieChartM;
