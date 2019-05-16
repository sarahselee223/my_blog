import React from "react"
import styles from '../styles/footer.module.css'

const Footer = () => (
  <footer className={styles.container}>
    <p>© 2019 <span className={styles.subFont} onClick={() => handleLinkedin()}>Sarah S. Lee</span></p>
  </footer>
)

const handleLinkedin = () => {
    window.location='https://www.linkedin.com/in/sarah-se-lee/'
}

export default Footer
