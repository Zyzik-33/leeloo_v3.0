import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const FooterBar = styled.div`
  width: 100vw;
  height: 2rem;
  background-color: red;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`
const fbIcon = <FontAwesomeIcon icon={faFacebook} />
const instaIcon = <FontAwesomeIcon icon={faInstagram} />

const Footer = () => {
  return (
    <>
      <FooterBar>
        <ul>
          <li>
            <a href="#">{fbIcon}</a>
          </li>
          <li>
            <a href="#">{instaIcon}</a>
          </li>
        </ul>
      </FooterBar>
    </>
  )
}

export default Footer
