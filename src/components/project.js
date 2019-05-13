import React from "react"
import Image from "gatsby-image"
import styles from '../styles/project.module.css'

const Project = ({ title, subtitle, description, takeAway, technology, demo, github, image }) => {

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <Image
        fluid={image.childImageSharp.fluid}
        alt={title}
        style={{ float: "left", marginRight: "1rem", width: 250 }}
      />
      <p className={styles.subtitle}>{subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: description }} className={styles.description}/>
      <p className={styles.takeAway}>{takeAway}</p>
      <p className={styles.technology}>{technology}</p>
      <a href="{https://youtu.be/-YDvsXGxs_Y}" className={styles.demo}>{demo}</a>
      <p className={styles.github}>{github}</p>
      <div style={{ clear: 'both' }}></div>
    </div>
  )
}

export default Project
