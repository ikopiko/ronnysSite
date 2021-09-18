
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: "Ronny's - Makes life better",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-backtotop', ssr: false },
    { src: '~/plugins/vue-toastification', ssr: false },
    { src: '~/plugins/vueperslides', ssr: false },
     { src: '~/plugins/firebase' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/font-awesome',
  ],
  vuetify: {
    /* module options */
  },
  /*
  ** Nuxt.js modules
  */


  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

  ],
  /*
  /*
  ** Global CSS
  */
  css: [
    './assets/scss/styles/animate.min.css',
    './assets/scss/styles/fontawesome.min.css',
    './assets/scss/styles/style.scss',
    './assets/scss/styles/admin.scss',
    './assets/scss/styles/responsive.scss',
  ],
  /** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {proxy: true},
  proxy: {"/api/": "http://188.169.16.186:8082/site/"},
  /*
  ** Globally configure <nuxt-link> default active class.
  */
  router: {
    linkActiveClass: 'active'
  },
  /*
  ** Build configuration
  */
 build: {
  extend: (config) => {
    const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

    svgRule.test = /\.(png|jpe?g|gif|webp)$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['babel-loader', 'vue-svg-loader'],
    });
  },
  target: 'static',
},

  
}
