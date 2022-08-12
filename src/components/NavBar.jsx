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
      <Link to="/" className="navName">
        SubQ
      </Link>
      <div className="links">
        <Link to="/sfx" className="link">
          SFX / SYNC
        </Link>
        <Link to="/music" className="link">
          Music
        </Link>
        <Link to="/productions" className="link">
          Beats
        </Link>
        {/* <Link to='/'>About</Link>
      <Link to='/'>Contact</Link> */}
      </div>
    </nav>
  )
}
