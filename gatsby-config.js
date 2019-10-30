require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `McCall Budget`,
    description: `Where is our money`,
    author: `@sloped`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {resolve: "gatsby-source-ynab"},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `McCall Budget`,
        short_name: `Budget`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#00b5ad`,
        display: `minimal-ui`,
        icon: `src/images/budget-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
