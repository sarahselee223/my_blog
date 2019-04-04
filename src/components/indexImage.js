import React, { Component } from 'react';
import styles from '../styles/index.module.css'
import robot1 from '../images/robot1.jpeg'
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
                        <img src={githubLogo} alt="githubLogo" height="35" width="35" onClick={() => this.handleGithub()}/>
                    </span>
                    <span className={styles.iconContainer}>
                        <img src={linkedinLogo} alt="linkedinLogo" height="35" width="35" onClick={() => this.handleLinkedin()}/>
                    </span>
                    <span className={styles.iconContainer}>
                        <img src={emailLogo} alt="emailLogo"height="35" width="35" onClick={() => this.handleEmail()}/>
                    </span>
                </div>
            </div>
        )
    }
}
export default IndexImage