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

  render(){
    return (
      <div className={styles.projectContainer}>
        <div className={styles.titleContainer}>
          <Image
            fluid={this.props.icon.childImageSharp.fluid}
            alt={this.props.title}
            style={{ float: "left", marginRight: "1rem", marginBottom: "10%", width: "40px" }}/>
          <h2 className={styles.title}>{this.props.title}</h2>
        </div>
        {typeof window !== 'undefined' && window.innerWidth < 520? 
          <div className={styles.contentContainerMobile}>
            <div className={styles.imageContainerMobile}>
            {this.props.videoSrcURL? 
              <iframe
                width="230" height="408"
                src={this.props.videoSrcURL}
                title={this.props.videoTitle}
                style={{margin: "1rem"}}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />:
              <div>
                <a href={this.props.demo} target="_blank" title={this.props.title}>
                  {this.props.imagePortrait ? 
                    <Image fluid={this.props.image.childImageSharp.fluid}
                    alt={this.props.title}
                    style={{ float: "left", margin: "1rem", width: "200px", height: "400px" }}/> :
                    <Image
                    fluid={this.props.image.childImageSharp.fluid}
                    alt={this.props.title}
                    style={{ float: "left", margin: "1rem", width: "250px" }}
                    />}
                </a>
              </div>
              }
            </div>
            <div className={styles.projectContentsMobile}>
              <div className={styles.titleContainer}>
                {this.props.github? 
                  <a href={this.props.github} target="_blank" title="Sarah Lee's GitHub">
                    <img src={githubLogo} alt="githubLogo" height="40" width="40"/> 
                  </a>
                : null}
                <p className={styles.subtitle}>{this.props.subtitle}</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: this.props.description }} className={styles.descriptionMobile}/>
              <p className={styles.takeAwayMobile}>{this.props.takeAway}</p>
              <p className={styles.technologyMobile}>
                <span>Technology: </span>
                  {this.props.technology} 
              </p>
            </div>
          </div>
        :
          <div className={styles.contentContainer}>
            <div className={styles.imageContainer}>
            {this.props.videoSrcURL? 
              <iframe
                width="230" height="408"
                src={this.props.videoSrcURL}
                title={this.props.videoTitle}
                style={{margin: "1rem"}}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />:
              <div>
                <a href={this.props.demo} target="_blank" title={this.props.title}>
                {this.props.id == "10" ?
                 <Image
                    fluid={this.props.image.childImageSharp.fluid}
                    alt={this.props.title}
                    style={{ float: "left", margin: "1rem", width: "230px" }}
                 />:
                 <Image
                    fluid={this.props.image.childImageSharp.fluid}
                    alt={this.props.title}
                    style={{ float: "left", margin: "1rem", width: "350px" }}
                  />
                }
                </a>
              </div>
              }
              
            </div>
            <div className={styles.projectContentsMobile}>
              <div className={styles.titleContainer}>
                {this.props.github? 
                  <a href={this.props.github} target="_blank" title="Sarah Lee's GitHub">
                    <img src={githubLogo} alt="githubLogo" height="40" width="40"/> 
                  </a>
                : null}
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
        }
      <div style={{ clear: 'both' }}></div>
    </div>
    )
  }
}

export default Project




