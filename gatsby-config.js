const queries = require("./src/utils/algolia")
const path = require(`path`)

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `blog.devjacks`,
    description: `devjacks blog`,
    author: `jacks`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: "zP21pmaKqtwKq01RGJfto8BZb",
          consumer_secret: "cfQioPRmrZmlbDXIpecNUGCN3xzFJhpcZpaTuk3pu8F2PfM6Yg",
          bearer_token:
            "AAAAAAAAAAAAAAAAAAAAAKkOCwEAAAAAcTkL8IpGeeHf1wudCOsC2dD3Vok%3D2BsYDQBwXsTyEkxcIFUcjr4hqv4TFrIdMMZaG2qQLpHGKOyYbr",
        },
        queries: {
          devjacks: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "devjacks",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
        },
      },
    },
  ],
}
