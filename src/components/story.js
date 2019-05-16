import React, { Component } from "react"
import Image from "gatsby-image"
import styles from '../styles/story.module.css'

class Story extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  

  render(){
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{this.props.title}</h2>
            </div>
            <div className={styles.dateContainer}>
                <p className={styles.description}>{this.props.date}</p>
            </div>
            <div>
                { this.props.id%2 !== 0 ? 
                <Image
                    fluid={this.props.image.childImageSharp.fluid}
                    alt={this.props.title}
                    style={{ float: "left", margin: "1rem", width: "350px" }}
                />
                :
                <Image
                    fluid={this.props.image.childImageSharp.fluid}
                    alt={this.props.title}
                    style={{ float: "right", margin: "1rem", width: "350px" }}
                />
                }
                
                <div dangerouslySetInnerHTML={{ __html: this.props.description }} className={styles.description}/>
            </div>
        </div>
    )
  }
}
export default Story