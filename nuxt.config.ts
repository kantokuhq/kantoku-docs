export default defineNuxtConfig({
  
  extends: [
    // https://github.com/nuxt-themes/docus
    '@nuxt-themes/docus',

    // https://github.com/harlan-zw/nuxt-seo-kit
    'nuxt-seo-kit'
  ],

  modules: [
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],

  plugins: [
    {
      src: './plugins/vue-matomo.client.js', 
      ssr: false
    }
  ],

  runtimeConfig: {
    public: {
      language: 'en',
      siteName: 'Kantoku',
      siteDescription: 'Empowering organizations with seamless information security processes and effective oversight.',
      titleSeparator: '|',
      trailingSlash: true,
    }
  },
})
