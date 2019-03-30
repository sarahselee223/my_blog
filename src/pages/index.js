import React from "react"
import { Link } from "gatsby"
import styles from '../styles/index.module.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className={styles.test}>Hi people</h1>
    <p className={styles.test}>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className={styles.indexMargin}>
    </div>
    <Link to="/aboutMe/">AboutMe</Link>
  </Layout>
)

export default IndexPage
