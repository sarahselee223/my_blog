import React, { Component } from 'react';
import styles from '../styles/index.module.css'
import meBack from '../images/me-back.jpg'
import githubLogo from '../images/github.png'
import linkedinLogo from '../images/linkedin.png'
import emailLogo from '../images/email.png'

class IndexImage extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    handleGithub = () => {
        window.location='https://github.com/sarahselee223'
    }
    handleLinkedin = () => {
        window.location='https://www.linkedin.com/in/sarah-se-lee/'
    }
    handleEmail = () => {
        window.location.href = "mailto:sarahselee223@gmail.com";
    }

    render(){
        return (
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                        <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                            <image href={meBack} alt="robot" x="-25" width="150" height="100" />
                        </pattern>
                        </defs>
                        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
                    </svg>
                </div>
                <span className={styles.myName}> Sarah S. Lee</span>
                {/* <span className={styles.myKoreanName}> 이 승 은 </span> */}
                <span className={styles.myTitle}> Software Engineer </span>
                <div>
                    <span className={styles.iconContainer}>
                        <img src={githubLogo} alt="githubLogo" height="35" width="35" onClick={() => this.handleGithub()}/>
                    </span>
                    <span className={styles.iconContainer}>
                        <img src={linkedinLogo} alt="linkedinLogo" height="35" width="35" onClick={() => this.handleLinkedin()}/>
                    </span>
                    <span className={styles.iconContainer}>
                        <img src={emailLogo} alt="emailLogo"height="35" width="35" onClick={() => this.handleEmail()}/>
                    </span>
                </div>
                <div>
                    <span className={styles.smallTextContainer}>currently learning about GraphQL</span>
                </div>
            </div>
        )
    }
}
export default IndexImage