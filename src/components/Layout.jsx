import React from "react"
import NavBar from "./NavBar"
import "../styles/global.css"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div className="layouts">
      <NavBar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2022 SubQ</p>
        <Link to="/about" className="about">
          About
        </Link>
      </footer>
    </div>
  )
}
