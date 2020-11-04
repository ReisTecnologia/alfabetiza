import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
`

export const BigLetter = ({ children }) => {
  const textRef = useRef()
  const [width, setWidth] = useState(null)
  useEffect(() => {
    const bbox = textRef.current.getBBox()
    const width = bbox.width
    setWidth(width)
  }, [setWidth])
  return (
    <Wrapper>
      <svg width={width}>
        <text
          fill={width ? '#000' : 'white'}
          ref={textRef}
          y="140"
          fontSize={200}
        >
          {children}
        </text>
      </svg>
    </Wrapper>
  )
}

BigLetter.propTypes = {
  children: PropTypes.string,
}
