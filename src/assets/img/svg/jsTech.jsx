import React from 'react'

export function JSTechIcon(props) {
  return (
    <svg
      width={75}
      height={75}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 75 75"
      style={{ width: '100%', height: '100%' }}
    >
      <path fill="#FFD369" d="M5 5h65v65H5z" className="point-python-svg" />
      <path
        d="M4.688 4.688v65.624h65.624V4.689H4.689zm35.156 50.976c0 6.388-3.774 9.502-9.236 9.502-4.934 0-7.797-2.554-9.25-5.638l5.02-3.04c.97 1.719 1.704 3.172 3.818 3.172 1.758 0 3.202-.792 3.202-3.876V35.156h6.446v20.508zm14.553 9.356c-5.726 0-9.426-2.584-11.232-6.152l5.028-2.911c1.319 2.16 3.04 3.598 6.08 3.598 2.554 0 4.038-1.131 4.038-2.893 0-2.114-1.528-2.863-4.348-4.102l-1.54-.662c-4.45-1.893-7.401-4.272-7.401-9.295 0-4.624 3.523-8.002 9.03-8.002 3.92 0 6.738 1.219 8.766 4.787l-4.81 3.093c-1.058-1.895-2.198-2.637-3.964-2.637-1.806 0-2.952 1.145-2.952 2.636 0 1.85 1.146 2.6 3.788 3.745l1.541.66c5.243 2.247 8.195 4.541 8.195 9.692.001 5.551-4.36 8.443-10.219 8.443z"
        fill="#EEE"
        className="main-python-svg"
      />
    </svg>
  )
}