import React from "react"
import "../../assets/styles/gallery.css"
import { useStaticQuery, graphql } from "gatsby"

const Aga = () => {
  const data1 = useStaticQuery(graphql`
    query AgaImage {
      allCloudinaryMedia(filter: { tags: { eq: "aga" } }) {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)

  const clImages = data1.allCloudinaryMedia.edges

  return (
    <div>
      <div className="image-grid">
        {clImages.map((image, index) => (
          <div className="image-item" key={`${index}-cl`}>
            <img src={image.node.secure_url} alt={Aga} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aga
