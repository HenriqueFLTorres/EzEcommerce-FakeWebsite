import * as React from "react"

const Arrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m20.5 11.5-6 6-6-6"
    />
  </svg>
)

export default Arrow
