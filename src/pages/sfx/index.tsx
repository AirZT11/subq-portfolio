import { graphql } from "gatsby"
import React from "react"
import CardListView from "../../components/CardListView"
import Layout from "../../components/Layout"
import { queryString } from "../../utils/query"

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
  query SFXQuery {
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
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        title
        type
        video
      }
    }
  }
`
