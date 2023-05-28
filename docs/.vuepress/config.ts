import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defaultTheme } from 'vuepress'

export default {
  title: "Maru Docs",
  description: "Maru Documentation",
  base: "/docs/",
  plugins: [
    googleAnalyticsPlugin({
      id: 'UA-72109002-1'
    })
  ],
  theme: defaultTheme({
    repo: "maruos/maruos",
    docsDir: "docs",
    editLink: true,
    editLinkText: "Help us improve this page!",
    navbar: [
      { text: "User Guide", link: "/user/" },
      { text: "Developer Guide", link: "/developer/" },
      { text: "Devices", link: "/devices/" },
      { text: "FAQ", link: "/faq/" },
      { text: "Release Notes", link: "/release-notes/" },
    ],
    sidebar: {
      "/user/": [
        {
          text: "User Guide",
          collapsible: false,
          children: [
            "",
            "/user/installation",
            "/user/upgrading",
            "/user/google-apps",
            "/user/tips",
          ],
        },
      ],
      "/developer/": [
        {
          text: "Developer Guide",
          collapsible: false,
          children: ["", "env", "download", "build", "porting"],
        },
      ],
    },
  }),
};
