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
      logo: { alt: 'My Site Logo', src: 'img/logo.svg' },
      items: [
        { to: '/docs/category/getting-started', label: 'User Guide', position: 'left' },
        { to: '/admin/intro', label: 'Admin Guide', position: 'left' },
        { to: '/reseller/intro', label: 'Reseller Guide', position: 'left' },
        { to: '/affiliate/intro', label: 'Affiliate Guide', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/facebook/docusaurus', label: 'GitHub', position: 'right' },
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
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } as Preset.ThemeConfig,
};

export default config;