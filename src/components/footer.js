import React from "react"
import styles from '../styles/footer.module.css'

const Footer = () => (
  <footer className={styles.container}>
    <p>© 2020 &nbsp; 
        <span className={styles.subFont}>
            <a href="mailto:sarahselee223@gmail.com" title="Sarah Lee's Email">
                Sarah S. Lee
            </a>
        </span>
    </p>
  </footer>
)

export default Footer
