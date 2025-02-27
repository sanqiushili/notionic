const BLOG = {
  title: '薯条发放处',
  author: '三秋十李 Sergio',
  email: 'leeguiyu@qq.com',
  link: 'https://blog.sqsl.art',
  newsletter: 'Weekly fries',
  description: 'A lazy man of constant exploration',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Notionic in a folder
  since: 2023, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  pagesShow: {
    newsletter: false,
    notes: true,
    projects: true,
    contact: true,
    books: false,
    friends: true
  },
  showWeChatPay: true,
  previewImagesEnabled: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateHost: 'og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  defaultCover: '/cover.jpg',
  socialLink: {
    twitter: 'https://twitter.com/LgyLight',
    github: 'https://github.com/sanqiushili',
    telegram: 'https://t.me/sanqiushili'
  },
  seo: {
    keywords: ['Notionic', 'sergio', '三秋十李','designer','Blog'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'sqsl.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '5540342779', // The chat id of your Telegram bot
  telegramChannelUrl: 'https://t.me/+RMsO3zyBKkllYTFl', // The link of your Telegram channel
  telegramChannelName: '三秋的薯条发放站🍟', // The name of your Telegram channel
  craftConfigShareUrl: 'https://www.craft.do/s/ARn8EPKjmMoHOq', // The link to share your craft config
  analytics: {
    provider: 'umami', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // Default
      token: '' // Like '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    },
    umamiConfig: {
      scriptUrl: 'https://analytics.umami.is/script.js', // The url of your Umami script
      websiteId: '488a0b23-a49a-4046-b44a-d90507332eec' // The website id of your Umami instance
    }
  },
  comment: {
    // support provider: utterances, supacomments
    provider: 'supacomments', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: 'https://kvdgripntlialpvqvozp.supabase.co', // The url of your Supabase instance
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2ZGdyaXBudGxpYWxwdnF2b3pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY0MTQxNDgsImV4cCI6MjAwMTk5MDE0OH0.yMbj55J_8L6HoRSPLlf1HKCjj-N3VNFIbk870lAIJys' // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: ''
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
