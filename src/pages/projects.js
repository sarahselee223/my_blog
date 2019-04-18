import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import Project from "../components/project"

export const query = graphql`
query {
  allProjectsJson {
    edges {
      node {
        title
        description
        price
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
        <SEO title="Projects" />
        <h1>Hi from the third page</h1>
        <p>There are going to be portfolios</p>
        <Link to="/">Go back to the homepage</Link>
        {  data.allProjectsJson.edges.map(edge => <Project {...edge.node}/>)}
      </Layout>
    )
}

export default Projects
