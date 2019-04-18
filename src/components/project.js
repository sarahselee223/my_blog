import React from "react"
import Image from "gatsby-image"

const Project = ({ title, description, price, image }) => {

  return (
    <div>
      <h1>{title}</h1>
      <Image
        fluid={image.childImageSharp.fluid}
        alt={title}
        style={{ float: "left", marginRight: "1rem", width: 150 }}
      />
      <p>{price}</p>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <div style={{ clear: 'both' }}></div>
    </div>
  )
}

export default Project
