const website = {
  title: "Michelle Krejci",
  titleTemplate: "%s | Michelle Krejci",
  description:
    "A portfolio website for a third year computer science and engineering student based in Sweden.",
  url: "https://michkrej.github.io",
  siteLanguage: "en",
  image: "/icon.png",

  favicon: "src/images/icon.png",
  author: "Michelle Krejci",
  themeColor: "#FAF0E8",
  backgroundColor: "#FFFFFF",

  googleAnalyticsId: "G-KQE2YRXX9S",
};

module.exports = {
  siteMetadata: {
    title: website.title,
    titleTemplate: website.titleTemplate,
    description: website.description,
    siteLanguage: website.siteLanguage,
    url: website.url,
    image: website.image,
    author: website.author,
    banner: website.image,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          website.googleAnalyticsId, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
        `,
        resolveSiteUrl: () => website.url,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: website.title,
        description: website.description,
        start_url: website.url,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: "standalone",
        icon: website.favicon,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
