import React from "react"
import { Link } from "gatsby"

const Gallery = () => {
  return (
    <>
      <a>
        <Link to="/gallery/love-story">love</Link>
        <Link to="/gallery/portraits">portraits</Link>
      </a>
    </>
  )
}

export default Gallery
