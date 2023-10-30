export default defineNuxtConfig({
  
  extends: [
    // https://github.com/nuxt-themes/docus
    '@nuxt-themes/docus',
  ],

  modules: [
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',

    // https://github.com/harlan-zw/nuxt-seo-kit
    '@nuxtseo/module',

    // https://github.com/zadigetvoltaire/nuxt-gtm
    '@zadigetvoltaire/nuxt-gtm'
  ],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://kantoku.io',
    name: 'Kantoku',
    description: 'Empowering organizations with seamless information security processes and effective oversight.',
    defaultLocale: 'en',
    
    identity: {
      type: 'Organization'
    },
    twitter: '@kantokuhq',
  },

  gtm: {
    id: 'GTM-P8CSVWQ',
    defer: false,
    compatibility: false,
    nonce: 'vifql45uuk',
    enabled: true,
    debug: false,
    loadScript: true,
    enableRouterSync: true,
    ignoredViews: [],
    trackOnNextTick: false,
    devtools: false,
  }
  
})
