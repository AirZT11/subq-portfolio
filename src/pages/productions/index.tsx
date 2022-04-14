import { graphql } from "gatsby"
import React from "react"
import CardListView from "../../components/CardListView"
import Layout from "../../components/Layout"

export default function Productions({ data }) {
  const dataArray = data.allDataJson.nodes

  return (
    <Layout>
      <CardListView data={dataArray} />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allDataJson {
      nodes {
        artist
        audio
        credits
        id
        image
        title
        type
        video
      }
    }
  }
`
