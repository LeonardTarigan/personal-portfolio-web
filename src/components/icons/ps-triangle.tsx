import { SVGProps } from "react";

function PSTriangle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_104)">
        <circle cx="16" cy="16" r="15.5" />
        <path
          d="M8.62263 21.5L16 8.95846L23.3774 21.5H8.62263Z"
          strokeWidth="3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_104">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PSTriangle;
