// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

const GIT_BRANCH = process.env.GIT_BRANCH || 'main';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fonoster',
  tagline: 'The Open Source Twilio Alternative',
  url: 'https://fonoster.com',
  baseUrl: process.env.DOCS_BASE_URL || '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fonoster', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: `https://github.com/fonoster/website/edit/${GIT_BRANCH}/docs/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            `https://github.com/fonoster/website/edit/${GIT_BRANCH}/docs/blog/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',
        disableSwitch: false,
  
        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'Fonoster Logo',
          src: '/img/logo-light.svg',
          srcDark: '/img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/docs/tutorials/using_google_speech', label: 'Tutorials', position: 'left' },
          { to: '/docs/reference/overview', label: 'Reference', position: 'left' },
          { to: 'https://marketplace.fonoster.com', label: 'Marketplace', position: 'left' },
          { to: 'https://console.fonoster.io', label: 'Sign in', position: 'left' },
          {
            href: 'https://github.com/fonoster/fonoster',
            className: 'navbar-item-github',
            position: 'right',
          },
          {
            href: 'https://twitter.com/fonoster',
            className: 'navbar-item-twitter',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Marketplace',
                to: 'https://marketplace.fonoster.com',
              },
              {
                label: 'VoIP Net',
                to: 'docs/getting_started/voipnet',
              },
              {
                label: 'Voice Applications',
                to: 'docs/getting_started/voice',
              }
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Support',
                href: '/docs/support',
              },
              {
                label: 'System Status',
                href: 'https://status.fonoster.io',
              },
              {
                label: 'Github Discussions',
                href: 'https://github.com/fonoster/fonoster/discussions',
              },
              {
                label: 'Discord Community',
                href: 'https://discord.gg/mpWSRUhG7e',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
              {
                label: 'API Reference',
                href: '/docs/reference/overview',
              },
              {
                label: 'Tutorials',
                href: '/docs/tutorials/using_google_speech',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'DEV',
                href: 'https://dev.to/t/fonoster',
              }
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()}, Fonoster. All Rights Reserved.`,
      },
      prism: {
        defaultLanguage: 'js',
        plugins: ['line-numbers', 'show-language'],
        theme: require('@kiwicopple/prism-react-renderer/themes/vsDark'),
        darkTheme: require('@kiwicopple/prism-react-renderer/themes/vsDark'),
      },
    }),

};

module.exports = config;
