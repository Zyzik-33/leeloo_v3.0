import React from "react"
import "../../assets/styles/gallery.css"
import { useStaticQuery, graphql } from "gatsby"

const Lesia2020 = () => {
  const data = useStaticQuery(graphql`
    query Lesia2020Images {
      allCloudinaryMedia(filter: { tags: { eq: "lesia2020" } }) {
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
            <img src={image.node.secure_url} alt={"Lesia2020"} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lesia2020
