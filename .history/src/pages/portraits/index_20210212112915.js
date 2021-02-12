import React from "react"
import { Link } from "gatsby"

import "../../assets/styles/gallery.css"
import images from "./images"

console.log(images)

const Portraits = () => {
  return (
    <div>
      <div className="image-grid">
      {images.map(({ id, src, title, description, slug }) => (
        <div className="image-item">
          
            <div className="prev-album">
              <img key={id} src={src} title={title} alt={description} />
              
              <Link to={`/portraits/${slug}`}>
                <div className="content">
                
                <div className="text">{`${title}`}</div>
              </div></Link>
              
            </div>
          
        </div>
      ))}
    </div>
    </div>
  )
}

export default Portraits
