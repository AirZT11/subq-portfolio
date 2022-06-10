import { graphql } from "gatsby"
import React from "react"
import CardListView from "../../components/CardListView"
import Layout from "../../components/Layout"

export default function Music({ data }) {
  const dataArray = data.allDataJson.nodes

  return (
    <Layout>
      <CardListView data={dataArray} />
    </Layout>
  )
}

// const productionType = queryString("production")
// console.log(productionType)
export const query = graphql`
  query musicQuery {
    allDataJson(filter: { type: { eq: "music" } }) {
      nodes {
        artist
        audio
        credits
        id
        image {
          src {
            childImageSharp {
              gatsbyImageData(
                width: 500
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
