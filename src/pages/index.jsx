import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import {
  header,
  home,
  btnContainer,
  btn,
  backgroundImage,
  logo,
  sfxBtn,
} from "../styles/home.module.css"

export default function Home() {
  const [logoDirection, setLogoDirection] = useState(false)
  const btnHovered = logoDirection && {
    transform: "scaleX(-1)",
  }
  return (
    <div className={home}>
      <section className={header}>
        <h2>SUBQ</h2>
        <StaticImage
          className={backgroundImage}
          src="../images/cloud-background.jpg"
        />
        <StaticImage
          className={logo}
          src="../images/logo.png"
          imgStyle={{
            ...btnHovered,
            transition: "0.25s ease",
          }}
        />

        <div className={btnContainer}>
          <Link
            to="/sfx"
            className={btn}
            id={sfxBtn}
            onMouseEnter={() => setLogoDirection(true)}
          >
            SFX
          </Link>
          <Link
            to="/music"
            className={btn}
            id="productionsBtn"
            onMouseEnter={() => setLogoDirection(false)}
          >
            Music
          </Link>
        </div>
      </section>
    </div>
  )
}
