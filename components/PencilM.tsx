import * as React from "react";

export const PencilM = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.854 7.133a.946.946 0 01.07.363l-.066.048a.651.651 0 010 .132c.009.076.009.152 0 .227-.052.115-.122.22-.209.312l-2.686 2.63L7.681 21.183a.946.946 0 01-.72.275h-4.01a.946.946 0 01-.946-.946v-4.01a.945.945 0 01.274-.672L15.296 2.814a.946.946 0 01.671-.274.946.946 0 01.672.274l4.01 4.01a.944.944 0 01.205.31zM3.897 19.566h2.677l9.393-9.393-2.677-2.677-9.393 9.393v2.677zM14.624 6.163L17.3 8.84l1.334-1.344-2.668-2.667-1.343 1.334z"
      fill="currentColor"
    />
    <path
      d="M14.65 19.536a.962.962 0 000 1.923h6.393a.962.962 0 000-1.923H14.65z"
      fill="currentColor"
    />
  </svg>
);
export default PencilM;
