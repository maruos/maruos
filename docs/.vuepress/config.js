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
      { text: 'FAQ', link: '/faq/' }
    ],
    sidebar: {
      '/user/': [
        {
          title: 'User Guide',
          collapsable: false,
          children: [
            '/user/',
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
            '/developer/env',
            '/developer/download',
            '/developer/build',
            '/developer/porting'
          ]
        }
      ]
    }
  }
}
