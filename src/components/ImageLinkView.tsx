import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { CardProps } from "./CardListView"
import * as styles from "../styles/card.module.css"

interface ImageLinkViewProps {
  audio?: string
  imageObj: any
}

export const ImageLinkView = ({ audio, imageObj }: ImageLinkViewProps) => {
  return audio ? (
    <a href={audio} target="_blank" className={styles.imageLinkViewContainer}>
      <GatsbyImage
        image={imageObj}
        alt="nothing"
        className={styles.gatsbyImage}
      />
    </a>
  ) :
  (
    <div className={styles.imageLinkViewContainer}>
      <GatsbyImage
      image={imageObj}
      alt="nothing"
      // className={styles.gatsbyImage}
    />
    </div>
  )
}
