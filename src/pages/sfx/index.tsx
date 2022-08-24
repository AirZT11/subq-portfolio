import { graphql } from "gatsby"
import React from "react"
import CardListView from "../../components/CardListView"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

export default function SFX({ data }) {
  const dataArray = data.allDataJson.nodes

  return (
    <Layout>
      <Seo title="SFX & Sync" />
      <CardListView data={dataArray} />
    </Layout>
  )
}

export const query = graphql`
  query sfxQuery {
    allDataJson(filter: { type: { eq: "sfx" } }) {
      nodes {
        artist
        audio
        credits
        id
        title
        type
        video
        description
      }
    }
  }
`
