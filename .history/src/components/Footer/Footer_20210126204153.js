import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const FooterBar = styled.div`
  width: 100vw;
  height: 2rem;
  background-color: #f5f0eb;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`
const Social = styled.ul`
  display: flex;
  align-items: center;
  justify-conten: center;
  list-syle: none;
  li {
    transform: scale(2);
  }
  a {
    margin: 5px;
    padding: 7px;

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