import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { CardProps } from "./CardListView"
import * as styles from "../styles/card.module.css"

export const ImageLinkView = ({ audio, imageObj }) => {
  return (
    <a href={audio} target="_blank" className={styles.imageLinkViewContainer}>
      <GatsbyImage
        image={imageObj}
        alt="nothing"
        className={styles.gatsbyImage}
      />
    </a>
  )
}
