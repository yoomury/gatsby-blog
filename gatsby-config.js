module.exports = {
  plugins: [
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `review`,
        path: `${__dirname}/review/`
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components"
  ]
};
