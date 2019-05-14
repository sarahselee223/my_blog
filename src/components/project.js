import React, { Component } from "react"
import Image from "gatsby-image"
import githubLogo from '../images/github2.png'
import styles from '../styles/project.module.css'

class Project extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  handleLink = () => {
    window.location= this.props.demo
  }
  handleGithub = () => {
    window.location=this.props.github
}

  render(){
    return (
      <div className={styles.projectContainer}>
        <div className={styles.titleContainer}>
        <Image
            fluid={this.props.icon.childImageSharp.fluid}
            alt={this.props.title}
            style={{ float: "left", marginRight: "1rem", marginBottom: "10%", width: "40px" }}
          />
          <h2 className={styles.title}>{this.props.title}</h2>
        </div>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
        {this.props.videoSrcURL? 
          <iframe
          width="230" height="408"
          src={this.props.videoSrcURL}
          title={this.props.videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />:
        <div onClick={() => this.handleLink()}>
          <Image
            fluid={this.props.image.childImageSharp.fluid}
            alt={this.props.title}
            style={{ float: "left", marginRight: "1rem", width: "350px" }}
          />
        </div>
        }
          
        </div>
        <div className={styles.projectContents}>
          <div className={styles.titleContainer}>
            {this.props.github? <img className={styles.icon} src={githubLogo} alt="githubLogo" height="40" width="40" onClick={() => this.handleGithub()}/> : null}
            <p className={styles.subtitle}>{this.props.subtitle}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: this.props.description }} className={styles.description}/>
          <p className={styles.takeAway}>{this.props.takeAway}</p>
          <p className={styles.technology}>
            <span>Technology: </span>
              {this.props.technology} 
          </p>

        </div>
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
    )
  }
}

export default Project




