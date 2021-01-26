import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const FooterBar = styled.div`
  width: 100vw;
  height: 4rem;
  background-color: #f5f0eb;
  position: fixed;
  bottom: 0.01rem;
  right: 0;
  left: 0;
`
const Social = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding-top: 1.3rem;
  li {
    transform: scale(2);
    color: black;
    margin: 1.7rem;
    padding-bottom: 3rem;
  }
  a {
    text-decorations: none;
    color: black;
  }
`

const fbIcon = <FontAwesomeIcon icon={faFacebook} />
const instaIcon = <FontAwesomeIcon icon={faInstagram} />

const Footer = () => {
  return (
    <>
      <FooterBar>
        <Social>
          <li><a href="https://www.facebook.com/drahomaretskaphotography" target="_blank">{fbIcon}</a></li>
          <li><a href="https://www.instagram.com/drahomaretska.photography" target="_blank">{instaIcon}</a></li>
        </Social>
      </FooterBar>
    </>
  )
}

export default Footer