import React from 'react'
import vscode from '../vscode.png'

export function CodeNotebook(props) {
  return (
    <div style={{ position: 'relative' }}>
      <svg
        width={800}
        height={454}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 454"
        {...props}
      >
        <path
          d="M786.253 413.889c0 1.131-.849 2.206-2.32 2.998-3.338 1.867-7.467 3.79-12.333 5.601-12.785 4.809-25.231 6.675-33.604 7.467H63.136c-8.656-.622-22.573-2.319-36.434-7.807-4.243-1.64-7.807-3.451-10.748-5.091-1.358-.792-2.15-1.811-2.15-2.942 0-1.867-.17-4.639-.057-5.092H327.22c1.131 0 2.093.566 2.093 1.245v2.206c0 3.847 5.374 6.959 11.993 6.959h115.806c6.619 0 11.993-3.112 11.993-6.959v-2.206c0-.679.962-1.245 2.093-1.245h315.169c-.057.34-.113 2.999-.113 4.866z"
          fill="#eeeeee"
        />
        <path
          d="M331.688 410.438v1.98c0 2.828 3.168 5.091 7.072 5.091h121.405c3.904 0 7.072-2.263 7.072-5.091v-1.98H331.688z"
          fill="#eeeeee"
        />
        <path
          d="M721.307 404.441H76.939a4.177 4.177 0 01-4.186-4.186V28.004a4.177 4.177 0 014.186-4.187h644.368a4.177 4.177 0 014.186 4.187v372.251a4.177 4.177 0 01-4.186 4.186z"
          fill="#eeeeee"
        />
        <path
          d="M712.312 392.391H87.066c-.905 0-1.64-.736-1.64-1.641V39.318c0-.905.735-1.64 1.64-1.64h625.246c.905 0 1.64.735 1.64 1.64v351.489c0 .848-.735 1.584-1.64 1.584z"
          fill="url(#prefix__paint0_linear_107_20)"
        />
        <defs>
          <linearGradient
            id="prefix__paint0_linear_107_20"
            x1={57.569}
            y1={-27.061}
            x2={570.614}
            y2={335.992}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7C7B7B" />
            <stop offset={1} stopColor="#9E9E9E" />
          </linearGradient>
        </defs>
      </svg>
      <div className="img-notebook">
        <img src={vscode} />
      </div>
    </div>
  )
}
