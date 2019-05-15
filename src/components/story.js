import React, { Component } from "react"
//import styles from '../styles/story.module.css'

class Story extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
      console.log(this.props)
    return (
        <div>
            <p>{this.props.title}</p>
        </div>
    )
  }
}
export default Story