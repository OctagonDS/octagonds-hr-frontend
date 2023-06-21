import React from 'react'

export function SearchIcon(props) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 17l-3-3"
        stroke="#EEE"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={8} cy={8} r={7} stroke="#EEE" strokeWidth={2} />
    </svg>
  )
}
