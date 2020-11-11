import React from 'react'
import { SvgPlay } from './SvgPlay'

export const Status = ({ loading, playing }) =>
  loading ? '...loading...' : <SvgPlay playing={playing} />
