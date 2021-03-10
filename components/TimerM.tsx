import * as React from "react";

export const TimerM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M9.776 0a1.565 1.565 0 100 3.13h.522v1.566h3.13V3.13h.522a1.565 1.565 0 000-3.13H9.776z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.31 14.695a9.305 9.305 0 11-18.61 0 9.305 9.305 0 0118.61 0zM10.8 9.458h1.591v5.247l4.244 2.921-.903 1.311-4.523-3.114H10.8v-.282l-.31-.213.31-.451v-5.42z"
      fill="currentColor"
    />
    <path
      d="M18.156 3.212a1 1 0 00-1.366.367l-.803 1.394 2.712 1.563.803-1.393a1 1 0 00-.367-1.366l-.98-.565z"
      fill="currentColor"
    />
  </svg>
);
export default TimerM;
