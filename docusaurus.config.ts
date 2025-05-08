import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Stack Console',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } as Preset.Options,
    ],
  ],

  plugins: [
    // Main docs (User Guide)
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default', // Unique ID for main docs
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.ts'),
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
    ],
    // Admin Guide
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'admin',
        path: 'admin',
        routeBasePath: 'admin',
        sidebarPath: require.resolve('./sidebarsAdmin.ts'),
      },
    ],
    // Reseller Guide
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reseller',
        path: 'reseller',
        routeBasePath: 'reseller',
        sidebarPath: require.resolve('./sidebarsReseller.ts'),
      },
    ],
    // Affiliate Guide
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'affiliate',
        path: 'affiliate',
        routeBasePath: 'affiliate',
        sidebarPath: require.resolve('./sidebarsAffiliate.ts'),
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Stack Console',
      logo: { alt: 'Stack Console Logo', src: 'img/logo.svg' },
      items: [
        { to: '/docs/Getting Started/Introduction', label: 'User Guide', position: 'left' },
        { to: '/admin/intro', label: 'Admin Guide', position: 'left' },
        { to: '/reseller/intro', label: 'Reseller Guide', position: 'left' },
        { to: '/affiliate/intro', label: 'Affiliate Guide', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            { label: 'User Guide', to: '/docs/category/getting-started'},
            { label: 'Admin Guide', to: '/admin/intro'},
            { label: 'Reseller Guide', to: '/reseller/intro'},
            { label: 'Affiliate Guide', to: '/affiliate/intro'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stack Console.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } as Preset.ThemeConfig,
};

export default config;