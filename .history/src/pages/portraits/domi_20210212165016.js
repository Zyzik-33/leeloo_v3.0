import React from "react"
import "../../assets/styles/gallery.css"
import { useStaticQuery, graphql } from "gatsby"

const Domi = () => {
  const data = useStaticQuery(graphql`
    query DomiImage {
      allCloudinaryMedia(filter: { tags: { eq: "domi" } }) {
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
            <img src={image.node.secure_url} alt={"Domi"} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Domi
