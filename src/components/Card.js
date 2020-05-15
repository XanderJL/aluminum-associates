import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function Card(props) {
  const imgStyle = {
    
  }

  return (
    <Link to={props.to}>
      <div className="card">
        <div className="card-image">
          {props.heroImage ? (
            <Img fluid={props.heroImage} style={imgStyle} alt={props.alt} />
          ) : (
            <div className="image is-4by3"></div>
          )}
        </div>
        <div className="card-content">
          <h2 className="title is-size-4">{props.title}</h2>
          {props.description ? (
            <p className="subtitle is-size-5">{props.description}</p>
          ) : null}
        </div>
      </div>
    </Link>
  )
}
