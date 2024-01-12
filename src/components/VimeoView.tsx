import * as styles from "../styles/card.module.css"
import React from "react"
import { ImageLinkView } from "./ImageLinkView"
import { GatsbyImage } from "gatsby-plugin-image"
import Vimeo from '@u-wave/react-vimeo';

export const VimeoView = ({ video, imageObj }) => {
  return (
    <div >
      <Vimeo
        video={video}
        width={'100%'}
        height={'100%'}
       
        responsive={true}
        />
    </div>
  )
}
