import { getImage } from "gatsby-plugin-image"
import React from "react"
import { CardProps } from "./CardListView"
import * as styles from "../styles/card.module.css"
import { ImageLinkView } from "./ImageLinkView"
import { VimeoView } from "./VimeoView"
import { MusicVideoView } from "./MusicVideoView"

interface CardDataProps {
  key: string
  cardData: CardProps
}
export default function CardView({ cardData }) {
  const { artist, audio, credits, image, title, type, video, description } =
    cardData

  // converts image data GatsbyImage iamge src
  const imageObj = image && getImage(image.src.childImageSharp.gatsbyImageData)

  // Add commas on artists/credits if > 1
  const addComma = (arr: [], i: number) => {
    if (arr.length > 1 && i < arr.length - 1) return ", "
    return ""
  }
  const infoArr = arr =>
    arr.map((name: string, i: number) => name + addComma(arr, i))

  const artistName = infoArr(artist)
  const artistCredits = infoArr(credits)
  const creditDescription = infoArr(description)

  return (
    <div className={styles.cardContainer}>
      {/* {image && <ImageLinkView audio={audio} imageObj={imageObj} />} */}
      {video && type === "sfx" && <VimeoView video={video} imageObj={imageObj} />}
      {video && type === "music" && <MusicVideoView video={video} />}
      <div className={styles.hoverOverlay}>
        <div className={styles.cardInfo}>
          <p>{title}</p>
        </div>
        <div className={styles.cardDescriptionContainer}>
          <span className={styles.cardDescriptionText}>
            {creditDescription}
          </span>
        </div>
      </div>
    </div>
  )
}
