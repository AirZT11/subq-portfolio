import React from "react"
import NavBar from "./NavBar"
import "../styles/global.css"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div className="layouts">
      <NavBar />
      <div className="content">{children}</div>
      <div className="footerContainer">
        <footer>
          <p>Copyright 2022 SubQ</p>
          <div>
            <a
              href="mailto: thesubq@gmail.com"
              className="about"
              style={{ paddingRight: "2rem" }}
            >
              Contact
            </a>
            <Link
              to="/about"
              className="about"
              style={{ paddingRight: "2rem" }}
            >
              About
            </Link>
            <a
              href="https://www.instagram.com/subqmusic/?hl=en"
              className="about"
              target="_blank"
              rel="noopener noreferrer"
            >
              IG
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
