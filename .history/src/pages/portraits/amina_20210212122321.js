import React from "react"
import "../../assets/styles/gallery.css"
import { useStaticQuery, graphql } from "gatsby"

const Amina = () => {
  const data2 = useStaticQuery(graphql`
    query AminaImage {
      allCloudinaryMedia(filter: { tags: { eq: "amina" } }) {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)

  const clImages = data2.allCloudinaryMedia.edges

  return (
    <div>
      <div className="image-grid">
        {clImages.map((image, index) => (
          <div className="image-item" key={`${index}-cl`}>
            <img src={image.node.secure_url} alt={Amina} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Amina
