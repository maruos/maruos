import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  title: "Maru Docs",
  description: "Maru Documentation",
  base: "/docs/",
  plugins: [
    googleAnalyticsPlugin({
      id: "UA-72109002-1",
    }),
  ],
  theme: defaultTheme({
    repo: "maruos/maruos",
    docsDir: "docs",
    editLink: true,
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
          collapsable: false,
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
          collapsable: false,
          children: ["", "env", "download", "build", "porting"],
        },
      ],
      '/faq/': false,
      '/release-notes/': false,
      '/devices/': false,
      '/': false,
    },
  }),
})
