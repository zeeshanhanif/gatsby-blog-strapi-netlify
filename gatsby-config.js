/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `JAMStack Blog Site`,
    description: `JAMStack Blog site to show experties in area of Gatsby, JAMStack and serverless`,
    author: `@zeeshanhanif`,
  },
  plugins: [
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL,
        contentTypes: [
          'blog'
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

  ],
}
