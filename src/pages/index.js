import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexImage from '../components/indexImage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <IndexImage/>
  </Layout>
)

export default IndexPage
