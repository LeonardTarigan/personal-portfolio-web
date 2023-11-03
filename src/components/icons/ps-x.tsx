import { SVGProps } from "react";

function PSX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_101)">
        <circle cx="16" cy="16" r="15.5" />
        <path d="M8 8L24 24M24 8L8 24" strokeWidth="3" />
      </g>
      <defs>
        <clipPath id="clip0_1_101">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PSX;
