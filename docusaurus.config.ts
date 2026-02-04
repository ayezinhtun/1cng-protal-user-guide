import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'One Cloud Next-Gen',
  tagline: 'Powerful. Scalable. Local.',
  favicon: 'img/1cng.ico',
  url: 'http://doc.stackwarriors.in/',
  baseUrl: '/',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: false, // Disable default docs plugin
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } as Preset.Options,
    ],
  ],

  plugins: [
    // ✅ Local Search (maintained fork)
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'], // support multiple languages if needed
        indexDocs: true,  // index /docs content
        indexBlog: false, // change to true if you also want blog posts searchable
        indexPages: true, // static pages
      },
    ],

    // Main docs (User Guide)
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: { alt: '1CNG Logo', src: 'img/1cng.png' },
      items: [
        { to: '/docs/Getting Started/Introduction', label: 'User Guide', position: 'left' },
        { to: '/docs/Best Practice', label: 'Best Practice', position: 'left'}, 
        { type: 'search', position: 'right' }, // 👈 search bar in navbar
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} 1CNG.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } as Preset.ThemeConfig,
};

export default config;
