import React, { Component } from 'react';
import { Link } from "gatsby"
import styles from '../styles/index.module.css'
import meBack from '../images/me-back.jpg'
import meFront from '../images/me-front.jpeg'
import githubLogo from '../images/github.png'
import linkedinLogo from '../images/linkedin.png'
import emailLogo from '../images/email.png'

const greeting = ['Hi! there👋', 'Press here👇', 'Welcome! 👽']

class Landing extends Component {
    constructor(props){
        super(props)
        this.state = {
            openIntro: false,
            mouseHovered: false
        }
    }

    toggleIntro = () => {
        this.setState({
            openIntro: !this.state.openIntro
        })
    }

    onMouseEnter = () => {
        this.setState({
            mouseHovered: true
        })
    }

    onMouseLeave = () => {
        this.setState({
            mouseHovered: false
        })
    }

    pickGreetingStmt = () => {
        const randomInt = Math.floor(Math.random() * Math.floor(greeting.length))
        return greeting[randomInt]
    }

    content = () => {
        return (
            <>
                <p> Hi, I'm Sarah. I love challenging myself and learning new things. I am currently working at a company called <a className={styles.linkFont} href="https://www.doctorondemand.com/">Doctor on Demand</a>. We solve problems in healthcare field by using technologies. I am working on their <a className={styles.linkFont} href="https://apps.apple.com/us/app/doctor-on-demand/id591981144">iOS app</a> to help people virtually meet various providers when they needed. </p>
                <p> Prior to working at Doctor on demand, I worked as a full stack software engineer at KenSci, and iOS engineer at Book Domicile. </p>
                <p> I would like to share my story and my journey of learning through this space. I have faced many unique challenges because I learned how to code in English, which is my second language (I call this "language inception 🤯"). I hope my <Link to="/stories/" className={styles.linkFont}>Story</Link> can be helpful to anyone who is facing similar challenges! :)</p>
            </>
        );
    }

    render(){
        return (
            <div className={styles.container}>
                {this.state.mouseHovered 
                    ? 
                        (<div>
                            <div className={styles.bubble}>{this.pickGreetingStmt()}</div>
                            <div className={styles.pointer}></div>
                        </div>
                        )
                        : <div className={styles.addHeight}></div>
                }

                <div className={styles.imageContainer} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                {this.state.openIntro ? 
                    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={() => this.toggleIntro()}>
                        <defs>
                            <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                                <image href={meFront} x="-25" width="150" height="100" />
                            </pattern>
                        </defs>
                        <polygon className={styles.path} points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)">
                        </polygon>
                    </svg>:
                    <svg className={styles.imageContainer2} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={() => this.toggleIntro()}>
                        <defs>
                        <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                            <image href={meBack} x="-25" width="150" height="100" title="click to see more about me"/>
                        </pattern>
                        </defs>
                        <polygon className={styles.path} points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" stroke="#ffff1a">
                        </polygon>
                    </svg>
                    }
                </div>
                <span className={styles.myName}> Sarah S. Lee</span>
                <span className={styles.myTitle}> Software Engineer </span>
                {this.state.openIntro ? 
                    typeof window !== 'undefined' && window.innerWidth < 520 ? 
                      <div className ={styles.introContainerMobile}>
                        {this.content()}
                      </div>
                    : <div className ={styles.introContainer}>
                        {this.content()}
                    </div> : null
                }

                <div className={styles.iconTopContainer}>
                    <span className={styles.iconContainer}>
                        <a href="https://github.com/sarahselee223" target="_blank" title="Sarah Lee's GitHub">
                            <img src={githubLogo} alt="GitHub Logo" height="35" width="35" />
                        </a>
                    </span>
                    <span className={styles.iconContainer}>
                        <a href="https://www.linkedin.com/in/sarah-se-lee/" target="_blank" title="Sarah Lee's LinkedIn">
                            <img src={linkedinLogo} alt="linkedinLogo" height="35" width="35" />
                        </a>
                    </span>
                    <span className={styles.iconContainer}>
                        <a href="mailto:sarahselee223@gmail.com" title="Sarah Lee's Email">
                            <img src={emailLogo} alt="emailLogo"height="35" width="35" />
                        </a>
                    </span>
                </div>
                {!this.state.openIntro ? 
                <div>
                    <p className={styles.learningText}>Currently learning about iOS development</p>
                </div>: null}
            </div>
        )
    }
}
export default Landing