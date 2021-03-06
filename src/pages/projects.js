import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import githubLogo from '../images/github2.png'
import styles from '../styles/project.module.css'

export const query = graphql`
query {
  allProjectsJson {
    edges {
      node {
        id
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
        {typeof window !== 'undefined' && window.innerWidth < 520 ?
          null
          :
          <div className={styles.instructionContainer}>
            <p className={styles.instruction}>* click left images or videos to checkout demo or deployed website & click <span><img src={githubLogo} alt="githubLogo" height="30" width="30"/></span>to checkout code in Github.</p>
          </div>
        }
        
        <SEO title="Projects" />
        {  data.allProjectsJson.edges.map(edge => <Project {...edge.node}/>)}
      </div>
      </Layout>
    )
}

export default Projects
