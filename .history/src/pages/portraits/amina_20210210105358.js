// (filter: { tags: { eq: "amina" } })
import React from "react"
import "../../assets/styles/gallery.css"
import { useStaticQuery, graphql } from "gatsby"

const Amina = () => {
  const data = useStaticQuery(graphql`
    query AminaImage {
      allCloudinaryMedia {
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

export default Amina
