import React from 'react'

export function DjangoTechIcon(props) {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.693 3h11.462v52.533c-5.87 1.11-10.193 1.547-14.87 1.547C17.288 57.065 10 50.812 10 38.8c0-11.573 7.73-19.083 19.707-19.083 1.86 0 3.275.146 4.986.584V3zm30.205 18.127v26.302c0 9.058-.678 13.414-2.67 17.17-1.859 3.61-4.307 5.886-9.367 8.401l-10.635-5.012c5.06-2.351 7.508-4.429 9.072-7.6 1.637-3.242 2.153-6.998 2.153-16.875V21.127h11.447zm-29.803 8.64c-1.342-.438-2.448-.584-3.865-.584-5.797 0-9.145 3.536-9.145 9.733 0 6.034 3.2 9.365 9.072 9.365 1.268 0 2.3-.071 3.938-.29V29.768z"
        fill="#EEE"
        className="main-python-svg"
      />
      <path
        fill="#FFD369"
        d="M52.3 3.02h11.5v11.5H52.3z"
        className="point-django-svg"
      />
    </svg>
  )
}
