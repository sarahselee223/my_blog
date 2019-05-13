import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

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
        <h1>Projects</h1>
        <SEO title="Projects" />
        {  data.allProjectsJson.edges.map(edge => <Project {...edge.node}/>)}
      </Layout>
    )
}

export default Projects
