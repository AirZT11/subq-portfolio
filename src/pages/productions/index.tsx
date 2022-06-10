import React from "react"
import Layout from "../../components/Layout"

export default function Productions({ data }) {
  return (
    <Layout>
      <iframe
        width="100%"
        height="700"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1429921309%3Fsecret_token%3Ds-HHYv8Fmxud1&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    </Layout>
  )
}
