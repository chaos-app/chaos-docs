/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Chaos Docs",
  tagline: "Organise your mess of links, images and documents",
  url: "https://docs.makechaos.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "chaos-app", // Usually your GitHub org/user name.
  projectName: "chaos-docs", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: "Chaos Docs",
      logo: {
        alt: "Chaos logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "index",
          position: "left",
          label: "Docs",
        },
        {
          label: "Return to Chaos",
          to: "https://makechaos.app",
          target: "_self",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Chaos. Docs by Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/chaos-app/chaos-docs/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
