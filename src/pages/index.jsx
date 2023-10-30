import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import Seo from "../components/Seo"
import {
  header,
  home,
  btnContainer,
  btn,
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
      <Seo title="Home" />
      <section className={header}>
        <h2>SUBQ</h2>
        <Link
            to="/sfx"
            className={btn}
            id={sfxBtn}
            onMouseEnter={() => setLogoDirection(true)}
          >
            ENTER
            {/* <StaticImage
              className={logo}
              src="../images/logo.svg"
              imgStyle={{
                ...btnHovered,
                transition: "0.1s ease-in-out",
              }}
            /> */}
          </Link>

        {/* <div className={btnContainer}>
          <Link
            to="/sfx"
            className={btn}
            id={sfxBtn}
            onMouseEnter={() => setLogoDirection(true)}
          >
            SFX / SYNC
          </Link>
          <Link
            to="/music"
            className={btn}
            id="productionsBtn"
            onMouseEnter={() => setLogoDirection(false)}
          >
            Music
          </Link>
        </div> */}
      </section>
    </div>
  )
}
