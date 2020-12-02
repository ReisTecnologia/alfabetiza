import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { GlobalStyle } from './GlobalStyle'
import { MainWrapper } from './MainWrapper'
// import { Footer } from './Footer'

export const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <main>{children}</main>
      </MainWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
