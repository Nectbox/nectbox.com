require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

module.exports = {
  siteMetadata: {
    title: 'Nectbox',
    tagLine: 'Product strategy and development',
    description:
      'Nectbox provides product strategy, and software development for startup innovation teams to launch and grow new digital products.',
    author: `Nectbox`,
    siteUrl: 'https://nectbox.com',
    twitter: '@nectbox',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALITICS_TRACKING_ID,
      },
    },
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 750,
            }
          }
        ]
      }
    },

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Poppins',
              variants: ['400', '500', '600', '700'],
            },
            {
              family: 'Mitr',
              variants: ['600', '700'],
            },
          ],
        },
      },
    },
  ],
};
