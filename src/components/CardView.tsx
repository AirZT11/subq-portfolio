import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import { CardProps } from "./CardListView"
import * as styles from "../styles/card.module.css"

interface CardDataProps {
  key: string
  cardData: CardProps
}
export default function CardView({ cardData }) {
  const { artist, audio, credits, image, title, type, video } = cardData
  const imageObj = image && getImage(image.src.childImageSharp.gatsbyImageData)

  const addComma = (arr: [], i: number) => {
    if (arr.length > 1 && i < arr.length - 1) return ", "
  }
  const infoArr = arr =>
    arr.map((name: string, i: number) => (
      <span>
        {name}
        {addComma(arr, i)}
      </span>
    ))

  const artistName = infoArr(artist)
  const artistCredits = infoArr(credits)

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <GatsbyImage
          className={styles.cardImage}
          image={imageObj}
          alt="nothing"
        />
        <iframe
          className={styles.cardSongPreview}
          src="https://open.spotify.com/embed/track/1w3vv3RTTbJY26NnYOZEZ8?utm_source=generator"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
      <div className={styles.cardInfo}>
        <div>"{title}"</div>
        <div>Artist: {artistName}</div>
        <div>Credits: {artistCredits}</div>
      </div>
    </div>
  )
}
