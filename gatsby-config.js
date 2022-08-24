module.exports = {
  siteMetadata: {
    title: "SUBQ Sounds",
    description:
      "SUBQ Sounds Homepage. Explore SUBQ's SFX, Sync, and Music productions for a vast array of client, artist, and personal projects.",
    image: `src/images/logo.png`,
    url: `https://www.subqsounds.com/`,
    author: `SUBQ`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    `gatsby-transformer-json`,
    "gatsby-plugin-dts-css-modules",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
  ],
}
