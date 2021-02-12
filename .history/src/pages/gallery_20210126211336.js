import React from "react"
import { Gallery } from "gatsby-theme-gallery"
import styled from "styled-components"

const TextWrapper = styled.div`
  position: relative;
  bottom: 0;
  text-align: center;
  padding-bottom: 4rem;
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
