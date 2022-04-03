/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * This is bassed upon Supabase's docs - https://github.com/supabase/supabase/tree/master/web
 */

module.exports = {
  title: 'Feedback Central',
  tagline: 'The AI powered feedback aggregator.',
  url: 'https://docs.feedbackcentral.io',
  baseUrl: '/',
  favicon: '/favicon.ico', // TODO Make favicon
  organizationName: 'feedbackcentral',
  projectName: 'feedbackcentral',
  trailingSlash: false,
  onBrokenLinks: 'ignore',
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '  ',
        darkIconStyle: {
          marginTop: '1px',
        },
        lightIcon: '  ',
        lightIconStyle: {
          marginTop: '1px',
        },
      }, 
    },
    //image: '/img/og-image.png', // TODO create meta images
    //metaImage: '/img/og-image.png', // TODO create meta images
    navbar: {
      hideOnScroll: true,
      // logo: { // TODO Create logo
      //   alt: 'Feedback Central',
      //   src: '/logo-light.svg',
      //   srcDark: '/logo-dark.svg',
      // },
      items: [
        {
          label: 'Reference',
          to: '/',
          activeBaseRegex:
            '(/reference)|(^/$)|(^/faq$)',
          position: 'left',
        },
        {
          label: 'Guides',
          to: '/guides',
          activeBaseRegex:
            '/guides$',
          position: 'left',
        },
        {
          label: 'Blog',
          to: '/blog',
          activeBaseRegex:
            '/blog$',
          position: 'left',
        },
        {
          href: 'https://github.com/feedbackcentral/feedbackcentral',
          className: 'navbar-item-github',
          position: 'right',
        },
        {
          href: 'https://feedbackcentral.io/twitter',
          className: 'navbar-item-twitter',
          position: 'right',
        },
      ],
    },
    prism: {
      defaultLanguage: 'js',
      additionalLanguages: ['dart'],
      plugins: ['line-numbers', 'show-language'],
      theme: require('@kiwicopple/prism-react-renderer/themes/vsDark'),
      darkTheme: require('@kiwicopple/prism-react-renderer/themes/vsDark'),
    },
    footer: {
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Whitepaper',
              to: 'https://feedbackcentral.io/whitepaper',
            },
            {
              label: 'Docs',
              to: '/',
            },
            {
              label: 'Pricing',
              to: 'https://feedbackcentral.io/pricing',
            },
            {
              label: 'System Status',
              to: 'https://status.feedbackcentral.io',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/feedbackcentral/feedbackcentral',
            },
            {
              label: 'Twitter',
              href: 'https://feedbackcentral.io/twitter',
            },
            {
              label: 'Discord',
              href: 'https://feedbackcentral.io/discord',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FeedbackCentral Team.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/feedbackcentral/docs/edit/master/web',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} FeedbackCentral Team.`,
          },
        },
      },
    ],
  ],
  scripts: [],
}
