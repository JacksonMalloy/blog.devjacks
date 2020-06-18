const queries = require('./src/utils/algolia')

require('dotenv').config()

const {
  api: { projectId, dataset },
} = requireConfig('../sanity/sanity.json')

module.exports = {
  siteMetadata: {
    title: `blog.devjacks`,
    description: `devjacks blog`,
    author: `jacks`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // QUERY BLOGPOSTS VIA /posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // IMAGES FOLDER
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // GATSBY IMAGE
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
    },
    // STYLED COMPONENTS
    `gatsby-plugin-styled-components`,
    // ALGOLIA SETUP
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    // SANITY
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: false,
        overlayDrafts: false,
      },
    },
    // TWITTER API
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: 'zP21pmaKqtwKq01RGJfto8BZb',
          consumer_secret: 'cfQioPRmrZmlbDXIpecNUGCN3xzFJhpcZpaTuk3pu8F2PfM6Yg',
          bearer_token:
            'AAAAAAAAAAAAAAAAAAAAAKkOCwEAAAAAcTkL8IpGeeHf1wudCOsC2dD3Vok%3D2BsYDQBwXsTyEkxcIFUcjr4hqv4TFrIdMMZaG2qQLpHGKOyYbr',
        },
        queries: {
          devjacks: {
            endpoint: 'statuses/user_timeline',
            params: {
              screen_name: 'devjacks',
              include_rts: false,
              exclude_replies: true,
              tweet_mode: 'extended',
            },
          },
        },
      },
    },
  ],
}

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

function requireConfig(path) {
  try {
    return require('../studio/sanity.json')
  } catch (e) {
    console.error('Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js')
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || 'gt1ynhdo',
        dataset: process.env.SANITY_DATASET || 'production',
      },
    }
  }
}
