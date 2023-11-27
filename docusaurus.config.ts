import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NiceNode docs',
  tagline: 'NiceNode documentation and guides',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.nicenode.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NiceNode/documentation/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/NiceNodeApplication.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'NiceNode Logo',
        src: 'img/logo-light.png',
        srcDark: 'img/logo-dark.png'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          href: 'https://github.com/NiceNode/documentation',
          label: 'Edit on GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: ` © Copyright ${new Date().getFullYear()} by NiceNode.`,
    },
    colorMode : {
      defaultMode: 'dark'
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
