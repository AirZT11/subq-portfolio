import React from "react"
import NavBar from "./NavBar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layouts">
      <NavBar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2022 SubQ</p>
      </footer>
    </div>
  )
}
