module.exports = {
  title: 'Maru Docs',
  description: 'Maru Documentation',
  base: '/docs/',
  ga: 'UA-72109002-1',
  themeConfig: {
    repo: 'maruos/maruos',
    docsDir: 'docs',
    editLinks: true,
    sidebar: [
      '/',
      {
        title: 'User Guide',
        collapsable: false,
        children: [
          '/user/',
          '/user/installation',
          '/user/upgrading',
          '/user/faq',
          '/user/tips',
        ]
      },
      {
        title: 'Developer Guide',
        collapsable: false,
        children: [
          '/developer/',
          '/developer/env',
          '/developer/download',
          '/developer/build',
          '/developer/porting'
        ]
      }
    ]
  }
}
