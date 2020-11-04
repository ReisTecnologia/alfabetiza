import React from 'react'
import PropTypes from 'prop-types'

export const CheckFirstLetter = ({ urlAudio }) => {
  return (
    <div>
      --- --- check first letter--- ---
      <svg
        x="0px"
        y="0px"
        width="20px"
        height="20px"
        viewBox="0 0 163.861 163.861"
      >
        <path
          d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275
		c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"
        />
      </svg>
    </div>
  )
}

CheckFirstLetter.propTypes = {
  urlAudio: PropTypes.string,
}
