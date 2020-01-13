import React, { Component } from 'react';
import { Link } from "gatsby"
import styles from '../styles/index.module.css'
import meBack from '../images/me-back.jpg'
import meFront from '../images/frontme.jpg'
import githubLogo from '../images/github.png'
import linkedinLogo from '../images/linkedin.png'
import emailLogo from '../images/email.png'

class IndexImage extends Component {
    constructor(props){
        super(props)
        this.state = {
            openIntro: false
        }
    }

    toggleIntro = () => {
        this.setState({
            openIntro: !this.state.openIntro
        })
    }

    render(){
        return (
            <div className={styles.container}>
                <div className={styles.imageContainer}>
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
                <span className={styles.myTitle}> Software Developer </span>
                {this.state.openIntro ? 
                    typeof window !== 'undefined' && window.innerWidth < 520 ? 
                      <div className ={styles.introContainerMobile}>
                        <p> Hi, I'm Sarah. I love challenging myself and learning new things. I am currently working on an iOS application called “Book Domicile” as a software engineer at Domicile. I maintain, update, and improve the iOS app using Xcode and Swift. You can check out the app at <a className={styles.linkFont} href="https://apps.apple.com/us/app/book-domicile/id1372934088">iOS App Store</a>. </p>
                        <p> I also worked on a mobile application called "My Pet Pal." You can check out my previous and current personal projects at <Link to="/projects/" className={styles.linkFont}>Projects</Link>. I write lots of JavaScript and have a lot of passion for web and mobile development. I like building interactive application, UI/UX, React, Redux and Native iOS apps. </p>
                        <p> I would like to share my story and my journey of learning through this website. I have faced many unique challenges because I learned how to code in English, which is my second language (I call this "language inception"). I hope my <Link to="/stories/" className={styles.linkFont}>Story</Link> can be helpful to anyone who is facing similar challenges. </p>
                      </div>
                    : <div className ={styles.introContainer}>
                        <p> Hi, I'm Sarah. I love challenging myself and learning new things. I am currently working on an iOS application called “Book Domicile” as a software engineer at Domicile. I maintain, update and improve the iOS app using Xcode and Swift. You can check out the app at <a className={styles.linkFont} href="https://apps.apple.com/us/app/book-domicile/id1372934088">iOS App Store</a>. </p>
                        <p> I also worked on a mobile application called "My Pet Pal." You can check out my previous and current personal projects at <Link to="/projects/" className={styles.linkFont}>Projects</Link>. I write lots of JavaScript and have a lot of passion for web and mobile development. I like building interactive application, UI/UX, React, Redux and Native iOS apps. </p>
                        <p> I would like to share my story and my journey of learning through this website. I have faced many unique challenges because I learned how to code in English, which is my second language (I call this "language inception"). I hope my <Link to="/stories/" className={styles.linkFont}>Story</Link> can be helpful to anyone who is facing similar challenges. </p>
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
                    <p className={styles.learningText}>currently learning about Swift, Xcode and GraphQL</p>
                </div>: null}
            </div>
        )
    }
}
export default IndexImage