export const queryString = type => {
  return `query MyQuery {
  allDataJson(filter: { type: { eq: ${type} } }) {
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
}`
}
