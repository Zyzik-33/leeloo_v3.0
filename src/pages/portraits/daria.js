import React from "react"
import "../../assets/styles/gallery.css"
import { useStaticQuery, graphql } from "gatsby"

const Daria = () => {
  const data = useStaticQuery(graphql`
    query DariaImage {
      allCloudinaryMedia(filter: { tags: { eq: "daria" } }) {
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
            <img src={image.node.secure_url} alt={"Daria"} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Daria
