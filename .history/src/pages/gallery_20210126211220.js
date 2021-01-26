import React from "react"
import { Gallery } from "gatsby-theme-gallery"
import styled from "styled-components"

const TextWrapper = styled.div`
  position: relative;
  bottom: 0;
  left: 30%;
  right: 30%;
  text-align: center;
  padding-bottom: 5rem;
`

const GalleryPage = () => (
  <>
    <Gallery />
    <TextWrapper>
      <h2>More photos in social media</h2>
      <h1>⬇⬇⬇</h1>
    </TextWrapper>
  </>
)

export default GalleryPage