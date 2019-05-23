import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Story from "../components/story"
import styles from '../styles/story.module.css'

export const query = graphql`
query {
  allStoriesJson {
    edges {
      node {
        title
        id
        date
        image {
          childImageSharp {
              fluid{
                  ...GatsbyImageSharpFluid
             }
           }
        }
        description
      }
    }
  }
}
`

const Stories = ({ data }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.story}>
          <h1>S T O R I E S</h1>
        </div>
        <SEO title="Stories" />
          { data.allStoriesJson.edges.map(edge => <Story {...edge.node}/>) }      
      </div>
    </Layout>
  )
}

export default Stories
