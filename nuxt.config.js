export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BRIVALS',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#1b1d1d' },
      { name: 'theme-color', content: '#1b1d1d' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes:'180x180', type: 'image/x-icon', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color:'#1b1b1b' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/assets/js/index.js', mode: "client" } 
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleFonts: {
    download: true,
    families: {
      'Open+Sans': {
        wght: [300, 400, 700],
        ital: [400]
      },
    }
  }
}
