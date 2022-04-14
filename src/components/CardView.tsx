import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { CardProps } from "./CardListView"
// import { header, home, btn, logo } from "../styles/home.module.css"

interface CardDataProps {
  key: string
  cardData: CardProps
}
export default function CardView({ key, cardData }) {
  const { artist, audio, credits, image, title, type, video } = cardData
  const imageObj = getImage(image)
  return (
    <div>
      <div>{title}</div>
      <div>{artist}</div>
      {/* <div>{credits}</div> */}
      <h2>{image}</h2>
      {image && <GatsbyImage image={imageObj} alt={title} />}
    </div>
  )
}

// export const query = graphql`
// images {
//   blogPost(id: { eq: $Id }) {
//     title
//     body
//     author
//     avatar {
//       childImageSharp {
//         gatsbyImageData(
//           width: 200
//           placeholder: BLURRED
//           formats: [AUTO, WEBP, AVIF]
//         )
//       }
//     }
//   }
// }
// `
