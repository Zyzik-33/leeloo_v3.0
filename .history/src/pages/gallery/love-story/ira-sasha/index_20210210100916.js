import React from "react"
import "../../../../assets/styles/gallery.css"
import { useStaticQuery, graphql } from "gatsby"

const IraSasha = () => {
  const data = useStaticQuery(graphql`
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

  const clImages = data.allCloudinaryMedia.edges

  console.log(clImages)

  return (
    <div>
      <div className="image-grid">
        {clImages.map((image, index) => (
          <div className="image-item" key={`${index}-cl`}>
            <img src={image.node.secure_url} alt={"no alt :("} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default IraSasha
