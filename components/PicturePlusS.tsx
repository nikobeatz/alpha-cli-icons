import * as React from "react";

export const PicturePlusS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.02 1.333a6.632 6.632 0 00-5.338 2.7 6.675 6.675 0 00-1.017 5.906.194.194 0 000 .067c.25.807.654 1.559 1.19 2.213l-1.33 1.333a.667.667 0 00-.14.726.666.666 0 00.652.387h5.982a6.635 6.635 0 003.868-1.248 6.665 6.665 0 002.42-3.271v-.054c.232-.673.354-1.38.36-2.093a6.681 6.681 0 00-1.947-4.713 6.647 6.647 0 00-4.7-1.953zm0 11.999H3.639l.2-.194 5.59-5.612a.664.664 0 01.93 0l2.407 2.4.153.146a5.33 5.33 0 01-1.96 2.37 5.308 5.308 0 01-2.94.89zm-4.96-3.42L4.11 8.86a.664.664 0 01.938 0l.578.58-1.808 1.826a5.116 5.116 0 01-.757-1.353zM13.305 8.58l-1.994-2a1.991 1.991 0 00-2.819 0l-1.92 1.927-.586-.58a1.991 1.991 0 00-2.811 0l-.472.446a3.51 3.51 0 010-.373c0-1.414.56-2.77 1.557-3.77a5.31 5.31 0 017.52 0 5.34 5.34 0 011.558 3.77c.01.191.01.382 0 .573l-.033.007z"
      fill="currentColor"
    />
  </svg>
);
export default PicturePlusS;