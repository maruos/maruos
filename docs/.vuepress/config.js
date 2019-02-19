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
      { text: 'FAQ', link: '/faq/' }
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
      ],
      '/devices/': [
        {
          title: 'Devices',
          collapsable: false,
          children: [
            'hammerhead',
            'bullhead',
            'star2lte'
          ]
        }
      ]
    }
  }
}
