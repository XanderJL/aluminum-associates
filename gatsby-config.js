require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Aluminum Associates`,
    description: `Aluminum Associates is a home renovation company specializing in Vinyl Windows, Doors, Siding, Soffit, Fascia, Eavestrough and Railing in London, Ontario`,
    author: `Alex Low`,
    siteUrl: `https://www.aluminumassociates.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Work Sans", "Poppins"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: `production`,
        watchMode: process.env.GATSBY_SANITY_WATCHMODE,
        token: process.env.GATSBY_SANITY_TOKEN,
        useCdn: false,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `./src/images/favicon.ico`,
      },
    },
  ],
}
