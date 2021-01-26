import React from "react"
import styled from "styled-components"

const FooterBar = styled.div`
  width: 100vw;
  height: 2rem;
  background-color: red;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`

const Footer = () => {
  return (
    <>
      <FooterBar>
        <ul>
          <li><a href=""></a></li>
        </ul>
      </FooterBar>
    </>
  )
}

export default Footer