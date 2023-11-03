import { SVGProps } from "react";

function PSRectangle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_98)">
        <circle cx="16" cy="16" r="15.5" />
        <rect x="8.5" y="8.5" width="15" height="15" strokeWidth="3" />
      </g>
      <defs>
        <clipPath id="clip0_1_98">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PSRectangle;
