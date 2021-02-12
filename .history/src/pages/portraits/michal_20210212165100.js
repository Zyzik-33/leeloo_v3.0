import React from "react"
import "../../assets/styles/gallery.css"
import { useStaticQuery, graphql } from "gatsby"

const Michal = () => {
  const data = useStaticQuery(graphql`
    query MichalImages {
      allCloudinaryMedia(filter: { tags: { eq: "michal" } }) {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)

  const clImages = data.allCloudinaryMedia.edges

  return (
    <div>
      <div className="image-grid">
        {clImages.map((image, index) => (
          <div className="image-item" key={`${index}-cl`}>
            <img src={image.node.secure_url} alt={"Michal"} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Michal
