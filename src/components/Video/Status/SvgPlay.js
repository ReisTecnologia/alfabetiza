import React from 'react'
export const SvgPlay = ({ playing, size = 40 } = {}) => {
  const color = playing ? '#01796f' : '#B5BBC0'
  return (
    <svg
      id="svg2"
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 130 80"
    >
      <defs id="defs6" />

      <g id="g4144" transform="translate(56.114483,-923.8891)">
        <rect
          ry="16"
          rx="16"
          y="923.8891"
          x="-56.114483"
          height="80"
          width="130"
          id="rect4142"
          style={{
            opacity: 1,
            fill: color,
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
        />
        <path
          id="path4140"
          d="m -15.826751,940.5733 49.42462,23.3158 -49.42462,23.31578 c 0,0 1.944544,-15.42658 1.944544,-23.3158 0,-7.8892 -1.944544,-23.31578 -1.944544,-23.31578 z"
          style={{
            opacity: 0.97,
            fill: '#ffffff',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: '#ffffff',
            strokeWidth: 1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
        />
      </g>
    </svg>
  )
}
