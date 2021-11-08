module.exports = {
  siteMetadata: {
    title: `BMR Sp. z o. o.`,
    description: `BMR Sp. z o. o. - profesjonalny wykonawca inwestycji drogowych`,
    author: `@Rafał`,
    siteUrl: `https://www.bmr.pl/`,
    keywords: [`budowa dróg, drogi, droga, chodniki, chodnik, wynajem znaków, roboty ziemne, organizacja ruchu, brukarstwo, remont nawierzchni, transport materiałów, roboty inwestycyjne, inwestycje drogowe`],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/page-elements/gallery/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Work Sans:300,400,500"],
      },
    },
  ],
};
