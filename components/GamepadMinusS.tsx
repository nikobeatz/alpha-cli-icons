import React from "react";

export const GamepadMinusS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v16H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.865 5.876l-.371-.005c-.354-.004-.706-.01-1.058-.01v-.103c-.005-.822-.692-1.497-1.535-1.502h-.553a.302.302 0 01-.307-.296.414.414 0 00-.418-.411.418.418 0 00-.42.411c0 .614.514 1.118 1.145 1.118h.553c.38 0 .698.307.698.685v.093c-.76 0-1.508.011-2.239.022C1.417 5.878.005 7.26.005 9.167v2.45c0 1.907 1.412 3.288 3.35 3.288.776.016 1.563.022 2.344.022.782 0 1.558-.006 2.334-.022 1.937 0 3.35-1.381 3.35-3.289V9.222a3.913 3.913 0 01-3.518-3.346zM4.455 10.8h.586c.228 0 .418-.181.418-.411a.418.418 0 00-.418-.411h-.587v-.576a.418.418 0 00-.418-.41.414.414 0 00-.419.41v.576h-.592a.418.418 0 00-.419.41c0 .231.19.412.42.412h.591v.58c0 .225.184.412.419.412a.418.418 0 00.418-.411V10.8zm3.014-.926h-.056a.41.41 0 110-.823h.056c.229 0 .419.187.419.412 0 .23-.19.41-.419.41zm.955 1.885h-.056a.41.41 0 110-.822h.056c.229 0 .418.186.418.411 0 .23-.19.411-.418.411zM12.45 8.171a3.556 3.556 0 100-7.111 3.556 3.556 0 000 7.111zm1.777-3.2V4.26h-3.556v.711h3.556z"
      fill="currentColor"
    />
  </svg>
);
export default GamepadMinusS;
