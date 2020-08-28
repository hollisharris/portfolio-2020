/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hollis Harris`,
        short_name: `Hollis Harris`,
        start_url: `/`,
        display: `standalone`,
        icon: `/favicon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-260x260.png`,
            sizes: `260x260`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'hCipdN5yhp3skbCb0oxDZgtt',
        homeSlug: 'home',
        version: 'draft',
        resolveRelations: ['home.featured_work'],
        includeLinks: true
      }
    }
  ],
}
