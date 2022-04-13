module.exports = {
  siteMetadata: {
    title: "FUCK THIS SHIT",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/sfx/`,
      },
    },
  ],
}
