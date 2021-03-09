module.exports = {
  title: "We build amazing apps",
  tagline: "Our amazing things to build amazing apps",
  url: "https://react-native.newestapps.com.br",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "rodrigotbrun", // Usually your GitHub org/user name.
  projectName: "newestapps-react-native-lib-docs", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: LocalizedFontFamilies,
    },

    announcementBar: {
      id: "support_us", // Any value that will identify this message.
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: "#fafbfc", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },

    // navbar: {
    //   // title: "Newestapps + React Native",
    //   logo: {
    //     alt: "Newestapps Brasil",
    //     src: "img/logo.svg",
    //   },
    //   links: [
    //     {
    //       to: "docs/welcome",
    //       activeBasePath: "docs",
    //       label: "Docs",
    //       position: "left",
    //     },
    //     // {to: 'blog', label: 'Blog', position: 'left'},
    //     // {
    //     //   href: 'https://github.com/facebook/docusaurus',
    //     //   label: 'GitHub',
    //     //   position: 'right',
    //     // },
    //   ],
    // },
    // algolia: {
    //   apiKey: "b8ae241a9d07ed32949880fa643fceb7",
    //   indexName: "reactNativeDOCS",

    //   // Optional: see doc section bellow
    //   contextualSearch: true,

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   //... other Algolia params
    // },
    // footer: {
    //   style: "dark",
    //   // links: [
    //   //   {
    //   //     title: "Docs",
    //   //     items: [
    //   //       {
    //   //         label: "Style Guide",
    //   //         to: "docs/doc1",
    //   //       },
    //   //       {
    //   //         label: "Second Doc",
    //   //         to: "docs/doc2",
    //   //       },
    //   //     ],
    //   //   },
    //   //   {
    //   //     title: "Community",
    //   //     items: [
    //   //       {
    //   //         label: "Stack Overflow",
    //   //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
    //   //       },
    //   //       {
    //   //         label: "Discord",
    //   //         href: "https://discordapp.com/invite/docusaurus",
    //   //       },
    //   //       {
    //   //         label: "Twitter",
    //   //         href: "https://twitter.com/docusaurus",
    //   //       },
    //   //     ],
    //   //   },
    //   //   {
    //   //     title: "More",
    //   //     items: [
    //   //       {
    //   //         label: "Blog",
    //   //         to: "blog",
    //   //       },
    //   //       {
    //   //         label: "GitHub",
    //   //         href: "https://github.com/facebook/docusaurus",
    //   //       },
    //   //     ],
    //   //   },
    //   // ],
    //   // copyright: `Sáude Cidadão - ${new Date().getFullYear()}`,
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   // Please change this to your repo.
        //   // editUrl:
        //   //   "https://github.com/facebook/docusaurus/edit/master/website/",
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
