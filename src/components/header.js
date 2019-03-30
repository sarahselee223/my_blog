import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from '../styles/header.module.css'

const Header = ({ siteTitle }) => (
  <header className={styles.container}>
    <div className={styles.margin}>
      <h4 className={styles.titleStyle}>
        <Link to="/" className={styles.mainFont}>{siteTitle}</Link>
        <Link to="/aboutMe/" className={styles.subFont}>About Me</Link>
        <Link to="/projects/" className={styles.subFont}>Projects</Link>
        <Link to="/stories/" className={styles.subFont}>Stories</Link>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
