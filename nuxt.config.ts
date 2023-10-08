export default defineNuxtConfig({
  
  extends: [
    // https://github.com/nuxt-themes/docus
    '@nuxt-themes/docus',
  ],

  modules: [
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',

    // https://github.com/harlan-zw/nuxt-seo-kit
    '@nuxtseo/module'
  ],

  plugins: [
    {
      src: './plugins/vue-matomo.client.js', 
      ssr: false
    }
  ],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://kantoku.io/docs',
    name: 'Kantoku',
    description: 'Empowering organizations with seamless information security processes and effective oversight.',
    defaultLocale: 'en',
    
    identity: {
      type: 'Organization'
    },
    twitter: '@kantokuhq',
  },

})
