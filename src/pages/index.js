import React from "react"
import styles from '../styles/index.module.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import robot1 from '../images/robot1.jpeg'
import githubLogo from '../images/github-logo.png'
import linkedinLogo from '../images/linkedin-logo-button.png'
import emailLogo from '../images/email.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
              <image href={robot1} alt="robot" x="-25" width="150" height="100" />
            </pattern>
          </defs>
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" stroke="black" stroke-width="0.2%"/>
        </svg>
      </div>
      <div className={styles.myName}>
        <span>Sarah S. Lee</span>
      </div>
      <div className={styles.myKoreanName}>
        <span>이 승 은</span>
      </div>
      <div className={styles.myTitle}>
        <span>Software Engineer</span>
      </div>
      <div>
        <span className={styles.iconContainer}>
          <img src={githubLogo} alt="githubLogo" />
        </span>
        <span className={styles.iconContainer}>
          <img src={linkedinLogo} alt="linkedinLogo" />
        </span>
        <span className={styles.iconContainer}>
          <img src={emailLogo} alt="emailLogo" />
        </span>
      </div>
    </div>
  </Layout>
)

export default IndexPage
