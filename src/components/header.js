import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from '../styles/header.module.css'

const Header = () => (
  <div className={styles.container}>   
    {typeof window !== 'undefined' && window.innerWidth < 500 ?
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
            <Link to="/" className={styles.subFont}>Home</Link>
        </div>
        <div className={styles.titleContainer}>
            <Link to="/projects/" className={styles.subFont}>Projects</Link>
        </div>
        <div className={styles.titleContainer}>
            <Link to="/stories/" className={styles.subFont}>Stories</Link>
        </div>
    </div>
    :
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
            <Link to="/" className={styles.subFont}>Home</Link>
        </div>
        <div className={styles.titleContainer}>
            <Link to="/projects/" className={styles.subFont}>Projects</Link>
        </div>
        <div className={styles.titleContainer}>
            <Link to="/stories/" className={styles.subFont}>Stories</Link>
        </div>
      </div>
    }
  </div>
)

export default Header
