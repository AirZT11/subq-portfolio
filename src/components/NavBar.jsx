import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import "../styles/global.css"

export default function NavBar() {
  // Note: Can't use dynamic static queries in components
  // only in pages
  // const data = useStaticQuery(graphql`
  //   query ComponentInfo {
  //     site {
  //       siteMetadata {
  //         description
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <nav>
      <h1>SubQ</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/sfx">SFX</Link>
        <Link to="/music">Music</Link>
        {/* <Link to='/'>About</Link>
      <Link to='/'>Contact</Link> */}
      </div>
    </nav>
  )
}
