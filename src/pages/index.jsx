import { Link } from "gatsby"
import React from "react"
import { header, home, btn, logo } from "../styles/home.module.css"

export default function Home() {
  return (
    <div className={home}>
      <section className={header}>
        <div>
          <h2>SUBQ</h2>
          <img className={logo} src="/logo.png" />
          <div>
            <Link to="/sfx" className={btn}>
              SFX
            </Link>
            <Link to="/productions" className={btn}>
              Productions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}