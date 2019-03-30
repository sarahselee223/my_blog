import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Stories" />
    <h1>Hi from the story page</h1>
    <p>There are going to be stories</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects
