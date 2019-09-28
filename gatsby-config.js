module.exports = {
  siteMetadata: {
    title: 'Austere',
  },
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-theme-austere`,
      options: {
        basePath: '/writing',
      },
    },
    'gatsby-plugin-theme-ui',
  ],
}
