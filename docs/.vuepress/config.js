module.exports = {
  title: 'Maru Docs',
  description: 'Maru Documentation',
  base: '/docs/',
  ga: 'UA-72109002-1',
  themeConfig: {
    repo: 'maruos/maruos',
    docsDir: 'docs',
    editLinks: true,
    nav: [
      { text: 'User Guide', link: '/user/' },
      { text: 'Developer Guide', link: '/developer/' },
      { text: 'Devices', link: '/devices/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Release Notes', link: '/release-notes/' }
    ],
    sidebar: {
      '/user/': [
        {
          title: 'User Guide',
          collapsable: false,
          children: [
            '',
            '/user/installation',
            '/user/upgrading',
            '/user/google-apps',
            '/user/tips',
          ]
        }
      ],
      '/developer/': [
        {
          title: 'Developer Guide',
          collapsable: false,
          children: [
            '',
            'env',
            'download',
            'build',
            'porting'
          ]
        }
      ]
    }
  }
}
