import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'THE-ONE-45372c56581648e4b130054dbe6f2420',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  includeNotionIdInUrls: true,

  // basic site info (required)
  name: 'ONE',
  domain: 'www.juncao.cc',
  author: 'chuyun',

  // open graph metadata (optional)
  description: '',

  // social usernames (optional)
  // twitter: '',
  github: 'chuyun',
  // linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // Giscus comments via Github Discusstion (optional)
  //
  // To generate the following configs, visit https://giscus.app/.
  giscusGithubConfig: {
    repo: 'chuyun/giscus-comments',
    repoId: 'R_kgDOJs5F6A',
    category: 'Comments',
    categoryId: 'DIC_kwDOJs5F6M4CXDwl',
    mapping: 'title',
    reactionsEnabled: '1',
    theme: 'light',
    inputPosition: 'top',
    lang: 'zh-CN',
    term: null
  },

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Wiki',
      pageId: 'Wiki-4fc3f5d4c4c94173aaae55b8a697d63f',
    },
    // {
    //   title: 'Timeline',
    //   pageId: 'Timeline-22abdf8e63c54eef97b425461c7669f0',
    // },
    {
      title: 'About',
      pageId: 'About-73670ad0df644e2aab9730e9716a7c17'
    },
    {
      title: 'Links',
      pageId: 'Links-337874585b254350a9137cacc8884c34'
    }
  ]
})
