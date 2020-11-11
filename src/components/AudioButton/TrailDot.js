import React from 'react'
import PropTypes from 'prop-types'

export const TrailDot = ({ color }) => {
  return (
    <svg height="8" width="20">
      <circle cx="10" cy="4" r="4" fill={color} />
    </svg>
  )
}
