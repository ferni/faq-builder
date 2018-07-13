module.exports = {
  siteMetadata: {
    title: 'MakerDAO FAQ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown-files`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    ]
}
