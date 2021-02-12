import React from "react"
import "../../assets/styles/gallery.css"
import { useStaticQuery, graphql } from "gatsby"

const Lesia2019 = () => {
  const data = useStaticQuery(graphql`
    query Lesia2019Images {
      allCloudinaryMedia(filter: { tags: { eq: "lesia2019" } }) {
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
            <img src={image.node.secure_url} alt={Lesia2019} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lesia2019
