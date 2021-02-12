import React from "react"
import styled from "styled-components"

const FooterBar = styled.div`
  width: 100vw;
  height: auto;
  background-color: red;
  position: fixed;
  right: 0;
  bottom: 0;
`

const Footer = () => {
  return (
    <>
      <FooterBar />
    </>
  )
}

export default Footer
