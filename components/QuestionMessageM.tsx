import * as React from "react";

export const QuestionMessageM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v25H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.567 6.505a6 6 0 016-6h8.866a6 6 0 016 6v7.918a6 6 0 01-6 6h-1.095l-2.394 3.192a1 1 0 01-1.6 0L8.95 20.423H7.567a6 6 0 01-6-6V6.505zm11.558 5.674h-1.469v-.793c0-.347.04-.602.117-.767.087-.173.27-.399.546-.676l.95-.949c.199-.217.298-.485.298-.806 0-.32-.104-.585-.312-.793-.208-.217-.476-.325-.806-.325-.329 0-.606.104-.832.312-.216.2-.342.468-.377.806H9.667c.087-.771.386-1.374.897-1.807.52-.442 1.166-.663 1.937-.663.772 0 1.4.212 1.885.637.486.416.728 1.001.728 1.755 0 .52-.143.953-.429 1.3-.164.208-.29.355-.377.442-.086.087-.203.2-.35.338-.14.13-.26.247-.365.351a5.287 5.287 0 00-.234.247c-.156.19-.234.46-.234.806v.585zm-.715 2.886c-.268 0-.502-.091-.702-.273a.905.905 0 01-.299-.676c0-.269.096-.498.286-.689.2-.19.434-.286.702-.286.278 0 .516.095.715.286.2.182.3.407.3.676 0 .26-.1.485-.3.676a.954.954 0 01-.702.286z"
      fill="currentColor"
    />
  </svg>
);
export default QuestionMessageM;
