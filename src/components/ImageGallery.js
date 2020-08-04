import React, { useState } from "react"
import Img from "gatsby-image"
import Lightbox from "react-image-lightbox"

import "react-image-lightbox/style.css"

export default function ImageGallery(props) {
  const [isOpen, setLightbox] = useState(false)
  const [index, setIndex] = useState(0)

  const imagesLength = props.images.length
  return (
    <div className="image-gallery-wrapper">
      {props.images.map(prop => (
        <button
          aria-label="Image thumbnail"
          onClick={() => {
            setLightbox(!isOpen)
            setIndex(props.images.indexOf(prop))
          }}
          key={prop.image.asset.id}
          style={{
            border: "0",
            background: "none",
            outline: "none",
          }}
        >
          <Img
            fluid={prop.image.asset.fluid}
            alt={prop.alternativeText}
            className="gallery-thumbnail card"
          />
        </button>
      ))}
      {isOpen ? (
        <Lightbox
          mainSrc={props.images[index].image.asset.fixed.src}
          nextSrc={
            props.images[(index + 1) % imagesLength].image.asset.fixed.src
          }
          prevSrc={
            props.images[(index + imagesLength - 1) % imagesLength].image.asset
              .fixed.src
          }
          mainSrcThumbnail={props.images[index].image.asset.fixed.base64}
          nextSrcThumbnail={
            props.images[(index + 1) % imagesLength].image.asset.fixed.base64
          }
          imageTitle={props.images[index].alternativeText}
          prevSrcThumbnail={
            props.images[(index + imagesLength - 1) % imagesLength].image.asset
              .fixed.base64
          }
          onCloseRequest={() => {
            setLightbox(!isOpen)
            setIndex(0)
          }}
          onMoveNextRequest={() => {
            setIndex((index + 1) % imagesLength)
          }}
          onMovePrevRequest={() => {
            setIndex((index + imagesLength - 1) % imagesLength)
          }}
        />
      ) : null}
    </div>
  )
}
