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
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
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
              src={video}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              onClick={e => console.log("hello!")}
            />
            // <ReactPlayer
            //     url={video}
            //     width="100%"
            //     height="100%"
            //   />
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
              {/* <div>Artist: {artistName}</div> */}
              {/* <div>Credits: {artistCredits}</div> */}
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
