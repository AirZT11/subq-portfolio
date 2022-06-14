import * as styles from "../styles/card.module.css"
import React from "react"

export const VimeoView = ({ video }) => {
  return (
    <div className={styles.embedContainer}>
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
