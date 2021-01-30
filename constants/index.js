export const LINKS = [
  {
    path: '/',
    target: '_self',
    label: '🏠 home'
  },
  {
    path: '/apps',
    target: '_self',
    label: '📱 apps'
  },
  {
    path: '/shorts',
    target: '_self',
    label: '🧾 shorts'
  },
  {
    path: '/resources',
    target: '_self',
    label: '💻 resources'
  },
  {
    path: '/bookmarks?tab=all',
    target: '_self',
    label: '📑 bookmarks'
  },
  {
    path: 'https://blog.achuth.dev',
    target: '_blank',
    label: '📚  blog'
  }
];

export const BOOMARK_TABS = [
  {
    title: 'All',
    link: '/bookmarks?tab=all'
  },
  {
    title: 'links',
    link: '/bookmarks?tab=links'
  },
  {
    title: 'portfolios',
    link: '/bookmarks?tab=portfolios'
  },
  {
    title: 'podcasts',
    link: '/bookmarks?tab=podcasts'
  }
];

export const BOOKMARKS = [
  {
    type: 'link',
    title: 'Free Quotes api',
    link: 'http://quotes.rest/qod.json'
  },
  {
    type: 'podcast',
    title: 'Sasspirates',
    category: 'spotify',
    link: 'https://anchor.fm/saaspirates'
  },
  {
    type: 'portfolios',
    title: 'Achuth Hadnoor',
    link: 'https://achuth.now.sh',
    preview: ''
  }
];
