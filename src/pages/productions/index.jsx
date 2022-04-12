import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"

export default function Productions({ data }) {
  const { description, title } = data.site.siteMetadata
  return (
    <Layout>
      <div>Productions</div>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
