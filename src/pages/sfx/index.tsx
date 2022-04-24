import { graphql } from "gatsby"
import React from "react"
import CardListView from "../../components/CardListView"
import Layout from "../../components/Layout"

export default function SFX({ data }) {
  const dataArray = data.allDataJson.nodes

  return (
    <Layout>
      <CardListView data={dataArray} />
    </Layout>
  )
}

// const productionType = queryString("sfx")
// console.log(productionType)
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
      }
    }
  }
`
