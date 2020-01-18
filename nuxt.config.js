// "dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server",

module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { name: 'description', content: 'Some description' },
      { name: 'keywords', content: '' },
      { property: 'og:image', content: 'http://' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Some desc' },
      { property: 'og:url', content: 'http://' },
      { property: 'og:title', content: 'Some title' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },

      { rel: 'stylesheet', href: '/src/toastify.css' }
    ],
    script: [
      { src: '/src/toastify.js' }
    ]
  },
  router: {
    base: '/'
  },
  loading: { color: '#fff' },
  plugins: [
    '~/plugins/firebase.js'
  ],
  modules: [
    // '@nuxtjs/axios',
  ],

  // axios: {
  // },

  build: {
    extend (config, ctx) {
    }
  }
}