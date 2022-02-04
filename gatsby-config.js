module.exports = {
  siteMetadata: {
    title: "Developer Productivity",
    subtitle: "The skills you need to succeed",
    author: "ThePrimeagen",
    authorSubtitle: "https://twitch.tv/ThePrimeagen",
    authorImage: "author.jpg", // this image should go in /static
    courseImage: "courseImage.png", // this also should go in /static
    twitter: "https://twitter.com/ThePrimeagen",
    linkedin: "",
    youtube: "https://youtube.com/ThePrimeagen",
    twitch: "https://twitch.tv/ThePrimeagen",
    github: "https://github.com/ThePrimeagen",
    description:
      "Developer Productivity helps every engineer take their career from junior to senior fast.",
    keywords: [
      "Programming",
      "Linux",
      "Developer",
      "Productivity",
      "Bash",
      "Git",
      "Vim",
      "NeoVim",
      "tmux",
    ],
  },
  pathPrefix: "developer-productivity",
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};
