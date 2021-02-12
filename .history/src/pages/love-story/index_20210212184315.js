import React from "react"
import { Link } from "gatsby"

import "../../assets/styles/gallery.css"
import images from "../../assets/styles/prev-obj/images-love"

const LoveStory = () => {
  return (
    <div>
      <div className="image-grid">
        {images.map(({ id, src, title, description, slug }) => (
          <div key={id}>
            <div className="prev-album">
              <img src={src} title={title} alt={description} />

              <Link to={`/love-story/${slug}`}>
                <div className="content">
                  <div className="text">{`${title}`}</div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoveStory
