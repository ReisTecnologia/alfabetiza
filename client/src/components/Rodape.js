import React from 'react'
import { FooterLink } from '../components/FooterLink'
import { FooterLinks } from '../components/FooterLinks'
import { Footer } from '../components/Footer'
import { Link } from 'gatsby'

export const Rodape = () => {
  return (
    <Footer>
      <FooterLinks>
        <FooterLink>
          <Link to="/">{'<'}</Link>
        </FooterLink>
        <FooterLink>A</FooterLink>
        <FooterLink>E</FooterLink>
        <FooterLink>I</FooterLink>
        <FooterLink>O</FooterLink>
        <FooterLink>U</FooterLink>
      </FooterLinks>
    </Footer>
  )
}
