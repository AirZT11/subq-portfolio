import React from "react"
import * as styles from "../styles/card.module.css"

export const MusicVideoView = ({ video }) => {
  return (
    <div className={styles.musicVideoContainer}>
      <iframe
        src={`${video}`}
        width="100%"
        height="100%"
        frameBorder=""
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  )
}
