import React from "react"
import * as styles from "../styles/about.module.css"
import Seo from "./Seo"

export default function AboutView() {
  return (
    <div className={styles.aboutContainer}>
      <Seo title="About" />
      <h1>About</h1>
      <section>
        <p>
          Sub Q is an award winning multi-instrumentalist, producer, composer,
          and an all-encompassing audio house.
        </p>
        <br />
        <p>
          Sub Q has played guitar, keys, and synth bass for major artists like
          Justine Skye, Jon Secada, and Pedro Capo.
        </p>
        <br />
        <p>
          His work also spans beyond the stage to include composition, sound
          effects, and mixing for companies such as IBM, Ocean Spray, and Elijah
          Craig Whiskey.
        </p>
        <br />
        <p>
          Sub Q’s diversity and knowledge in music and sound design enables him
          to understand your various needs thoroughly and to execute them with
          top notch quality and efficiency.
        </p>
        <br />
        <p>
          He strives to enhance any production, whether live or through sound
          design, with the highest sonic standards the industry has to offer.
        </p>
      </section>
    </div>
  )
}
