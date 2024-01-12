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
        image {
          src {
            childImageSharp {
              gatsbyImageData(
                width: 1000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        title
        type
        video
        description
      }
    }
  }
`
