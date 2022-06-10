import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React, { useRef } from "react"
import { CardProps } from "./CardListView"
import * as styles from "../styles/card.module.css"

interface CardDataProps {
  key: string
  cardData: CardProps
}
export default function CardView({ cardData }) {
  const { artist, audio, credits, image, title, type, video } = cardData

  // converts image data GatsbyImage iamge src
  const imageObj = image && getImage(image.src.childImageSharp.gatsbyImageData)

  // Add commas on artists/credits if > 1
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
      {/* <div className={styles.cardMediaContainer}> */}
      <a href={audio} target="_blank" className={styles.imageLinkWrapper}>
        {image && (
          <GatsbyImage
            className={styles.cardImage}
            image={imageObj}
            alt="nothing"
          />
        )}
        {video && (
          <iframe
            src={`${video}`}
            width="100%"
            height="300"
            frameBorder="0"
            allow="autoplay; fullscreen"
            // webkitAllowFullScreen
            // mozallowfullscreen
            allowFullScreen
            onClick={e => console.log("hello!")}
          />
        )}

        {/* <iframe
            className={styles.cardSongPreview}
            src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWWvHBEQLnV1N"
            width="100%"
            height="100%"
            frameBorder={0}
          /> */}
        <div className={styles.hoverOverlay}>
          <div className={styles.cardInfo}>
            <p>{title}</p>
          </div>
        </div>
      </a>
      {/* </div> */}
    </div>
  )
}
