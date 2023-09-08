export default defineAppConfig({
  docus: {
    title: 'Kantoku',
    description: 'Empowering organizations with seamless information security processes and effective oversight.',
    url: 'https://kantoku.io',
    socials: {
      website: {
        label: 'Website',
        icon: 'fa-globe',
        href: 'https://kantoku.io',
      },
      twitter: 'kantokuhq',
      github: 'kantokuhq',
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'kantoku-docs',
      owner: 'kantokuhq',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
  }
})
