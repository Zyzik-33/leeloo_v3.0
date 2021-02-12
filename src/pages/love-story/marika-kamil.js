import React from "react"
import "../../assets/styles/gallery.css"
import { useStaticQuery, graphql } from "gatsby"

const MarikaKamil = () => {
  const data = useStaticQuery(graphql`
    query MarikaKamilImage {
      allCloudinaryMedia(filter: { tags: { eq: "marika-kamil" } }) {
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
            <img src={image.node.secure_url} alt={"Marika and Kamil"} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarikaKamil
