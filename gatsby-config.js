// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        preset: `@theme-ui/preset-future`
      },
    },
  ],
  siteMetadata: {
    title: `Hello, Gatsby!`,
    author: `My Name`,
    description: `My site description...`,
    siteUrl: 'http://localhost:8000/',
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  }
}