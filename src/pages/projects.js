import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import styles from '../styles/project.module.css'

export const query = graphql`
query {
  allProjectsJson {
    edges {
      node {
        title
        subtitle
        description
        takeAway
        technology
        demo
        github
        videoSrcURL
        videoTitle
        icon {
          childImageSharp {
              fluid{
                  ...GatsbyImageSharpFluid
             }
           }
        }
        image {
          childImageSharp {
              fluid{
                  ...GatsbyImageSharpFluid
             }
           }
        }
      }
    }
  }
}
`

const Projects = ({ data }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.project}>
          <h1>P R O J E C T S</h1>
        </div>
        <SEO title="Projects" />
        {  data.allProjectsJson.edges.map(edge => <Project {...edge.node}/>)}
      </div>
      </Layout>
    )
}

export default Projects
