import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from '../styles/header.module.css'

const Header = ({ siteTitle }) => (
  <header className={styles.container}>
    <div className={styles.margin}>
      <h4 className={styles.titleStyle}>
        {typeof window !== 'undefined' && window.innerWidth < 500 ?
          <div>
            <Link to="/" className={styles.subFontMobile}>{siteTitle}</Link>
            <Link to="/projects/" className={styles.subFontMobile}>Projects</Link>
            <Link to="/stories/" className={styles.subFontMobile}>Stories</Link>
          </div>
        :
          <div>
            <Link to="/" className={styles.subFont}>{siteTitle}</Link>
            <Link to="/projects/" className={styles.subFont}>Projects</Link>
            <Link to="/stories/" className={styles.subFont}>Stories</Link>
          </div>
        }
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
