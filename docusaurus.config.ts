import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import excludeUnpublishedAssets from './plugins/exclude-unpublished-assets';

// Pages that moved during the 2026-09 restructure. Left is the path that
// exists today, right are the retired paths that must keep resolving.
const moved: [string, string[]][] = [
  // Host-side tool pages were folded back into the product pages that use them.
  ['/blade-3/getting-started/install-os/', [
    '/blade-3/getting-started/install-os/flash-image/', '/common/flashing/rockchip-flash-tool/']],
  ['/blade-3/getting-started/connect/', [
    '/blade-3/mixtile-os/serial/', '/blade-3/mixtile-os/adb/', '/blade-3/mixtile-os/ssh/',
    '/common/connecting/serial-console/']],
  // Blade 3
  ['/blade-3/accessories/', ['/blade-3/accessories/case/']],
  // Edge 2 (restructured to the Blade 3 chapter layout in 2026-09)
  ['/edge-2/', [
    '/edge-2/getting-started/introduction/', '/edge-2/hardware/specifications/',
    '/edge-2/hardware/hardware-interface/', '/edge-2/hardware-design/hardware-interface/',
    '/edge-2/hardware-design/specifications/']],
  ['/edge-2/getting-started/install-os/', [
    '/edge-2/getting-started/install-os/flash-image/',
    '/edge-2/development/install-os/', '/edge-2/development/install-os/partition-images/',
    '/edge-2/low-level-dev/install-os/', '/edge-2/low-level-dev/install-os/partition-images/']],
  ['/edge-2/getting-started/connect/', [
    '/edge-2/mixtile-os/serial/', '/edge-2/mixtile-os/adb/', '/edge-2/mixtile-os/ssh/']],
  ['/edge-2/system-usage/', [
    '/edge-2/mixtile-os/', '/edge-2/software/', '/edge-2/software/mixtile-os/',
    '/edge-2/software/bluetooth/', '/edge-2/mixtile-os/bluetooth/']],
  ['/edge-2/hardware-usage/', [
    '/edge-2/hardware/', '/edge-2/hardware-design/', '/edge-2/interfaces/', '/edge-2/getting-started/interface-usage/',
    '/edge-2/hardware/connectors/', '/edge-2/hardware-design/connectors/',
    '/edge-2/hardware/functional-description/', '/edge-2/hardware-design/functional-description/']],
  ['/edge-2/hardware-usage/uart/', ['/edge-2/interfaces/uart/', '/edge-2/getting-started/interface-usage/uart/']],
  ['/edge-2/hardware-usage/rs485/', ['/edge-2/interfaces/rs485/', '/edge-2/getting-started/interface-usage/rs485/']],
  ['/edge-2/hardware-usage/can/', ['/edge-2/interfaces/can/', '/edge-2/getting-started/interface-usage/can/']],
  ['/edge-2/hardware-usage/rtc/', ['/edge-2/interfaces/rtc/', '/edge-2/getting-started/interface-usage/rtc/']],
  ['/edge-2/hardware-usage/other-connectors/', ['/edge-2/interfaces/ir/', '/edge-2/getting-started/interface-usage/ir/']],
  ['/edge-2/hardware-usage/m2-mini-pcie/', [
    '/edge-2/interfaces/m2-minipcie/', '/edge-2/getting-started/interface-usage/m2-minipcie/',
    '/edge-2/software/cellular/', '/edge-2/mixtile-os/cellular/',
    '/edge-2/accessories/lora-modules/', '/edge-2/accessories/nvme-ssd/']],
  ['/edge-2/application-development/', [
    '/edge-2/app-development/', '/edge-2/software/ai/', '/edge-2/app-development/ai/',
    '/edge-2/software/ai/hailo/', '/edge-2/app-development/ai/hailo-install/',
    '/edge-2/software/ai/edge-ai-box/', '/edge-2/app-development/ai/edge-ai-box/',
    '/edge-2/software/ai/restaurant-tables/', '/edge-2/app-development/ai/hailo-yolo-restaurant/',
    '/edge-2/software/lorawan/', '/edge-2/app-development/lorawan/']],
  ['/edge-2/application-development/yolov8/', ['/edge-2/software/ai/yolov8/', '/edge-2/app-development/ai/yolov8/']],
  ['/edge-2/low-level-development/', [
    '/edge-2/development/', '/edge-2/low-level-dev/', '/edge-2/development/build-system/', '/edge-2/low-level-dev/build-system/']],
  ['/edge-2/low-level-development/build-image/', [
    '/edge-2/development/build-image/', '/edge-2/low-level-dev/build-image/', '/edge-2/development/build-debian/',
    '/edge-2/development/build-system/debian/', '/edge-2/low-level-dev/build-system/debian/']],
  ['/edge-2/other-operating-systems/', [
    '/edge-2/other-os/', '/edge-2/other-os/android/', '/edge-2/other-os/android/low-level-dev/',
    '/edge-2/development/android-image/', '/edge-2/low-level-dev/android-image/',
    '/edge-2/software/ubuntu-container/', '/edge-2/mixtile-os/ubuntu-container/']],
  ['/edge-2/other-operating-systems/home-assistant-os/', [
    '/edge-2/software/home-assistant/', '/edge-2/app-development/home-assistant/']],
  ['/edge-2/accessories/zigbee-zwave-module/home-assistant-setup/', [
    '/edge-2/software/home-assistant/zigbee-zwave/', '/edge-2/app-development/home-assistant/zigbee-zwave/',
    '/edge-2/accessories/home-assistant-setup/']],
  ['/edge-2/accessories/zigbee-zwave-module/addons/', [
    '/edge-2/software/home-assistant/addons/', '/edge-2/app-development/home-assistant/addons/',
    '/edge-2/accessories/addons/']],
  ['/edge-2/accessories/zigbee-zwave-module/flash-firmware/', ['/edge-2/accessories/flash-firmware/']],
  ['/edge-2/accessories/zigbee-zwave-module/update-zwave-firmware/', ['/edge-2/accessories/update-zwave-firmware/']],
  ['/edge-2/accessories/zigbee-zwave-module/region-configurator/', ['/edge-2/accessories/region-configurator/']],
  ['/edge-2/accessories/zigbee-zwave-module/raspberry-pi/', ['/edge-2/accessories/raspberry-pi/']],
  // Cluster Box
  ['/cluster-box/hardware/', ['/cluster-box/hardware-design/hardware-interface/', '/cluster-box/hardware-design/']],
  ['/cluster-box/software/basic-commands/', ['/cluster-box/mixtile-os/basic-commands/']],
  ['/cluster-box/software/hostname/', ['/cluster-box/mixtile-os/hostname/']],
  ['/cluster-box/software/factory-reset/', ['/cluster-box/mixtile-os/factory-reset/']],
  ['/cluster-box/software/miop-driver-update/', ['/cluster-box/mixtile-os/miop-driver-update/']],
  ['/cluster-box/software/', ['/cluster-box/mixtile-os/']],
  // Core 3588E
  ['/core-3588e/', ['/core-3588e/getting-started/introduction/']],
  ['/core-3588e/getting-started/install-os/', ['/core-3588e/getting-started/install-os/flash-image/']],
  ['/core-3588e/getting-started/connect/', [
    '/core-3588e/mixtile-os/serial/', '/core-3588e/mixtile-os/adb/', '/core-3588e/mixtile-os/ssh/', '/core-3588e/mixtile-os/']],
  ['/core-3588e/system-usage/', ['/core-3588e/software/mixtile-os/', '/core-3588e/software/']],
  ['/core-3588e/hardware-usage/', [
    '/core-3588e/hardware/specifications/', '/core-3588e/hardware/',
    '/core-3588e/hardware-design/hardware-interface/', '/core-3588e/hardware-design/',
    '/core-3588e/interfaces/', '/core-3588e/getting-started/interface-usage/']],
  ['/core-3588e/hardware-usage/connector-pinout/', [
    '/core-3588e/hardware/pinout/', '/core-3588e/hardware/functional-description/']],
  ['/core-3588e/hardware-usage/40-pin-header/', [
    '/core-3588e/interfaces/uart/', '/core-3588e/interfaces/i2c/',
    '/core-3588e/getting-started/interface-usage/uart/', '/core-3588e/getting-started/interface-usage/i2c/']],
  ['/core-3588e/hardware-usage/rtc/', ['/core-3588e/interfaces/rtc/', '/core-3588e/getting-started/interface-usage/rtc/']],
  ['/core-3588e/hardware-usage/mipi-csi/', [
    '/core-3588e/interfaces/mipi-csi/', '/core-3588e/getting-started/interface-usage/mipi-csi/']],
  ['/core-3588e/hardware-usage/m2/', [
    '/core-3588e/interfaces/m2-e-key/', '/core-3588e/interfaces/m2-m-key/',
    '/core-3588e/getting-started/interface-usage/m2-e-key/', '/core-3588e/getting-started/interface-usage/m2-m-key/']],
  ['/core-3588e/low-level-development/build-image/', [
    '/core-3588e/development/build-image/',
    '/core-3588e/development/build-debian/', '/core-3588e/development/build-ubuntu/',
    '/core-3588e/low-level-dev/build-system/debian/', '/core-3588e/low-level-dev/build-system/ubuntu/']],
  ['/core-3588e/low-level-development/', [
    '/core-3588e/development/', '/core-3588e/low-level-dev/', '/core-3588e/low-level-dev/build-system/']],
  ['/core-3588e/other-operating-systems/yocto/', ['/core-3588e/development/build-yocto/', '/core-3588e/other-os/yocto/']],
  ['/core-3588e/other-operating-systems/', ['/core-3588e/other-os/']],
  ['/core-3588e/accessories/', ['/core-3588e/accessories/active-cooler/']],
  // Core 3568
  ['/core-3568/introduction/', ['/core-3568/getting-started/introduction/', '/core-3568/getting-started/']],
  ['/core-3568/hardware/specifications/', [
    '/core-3568/hardware-design/hardware-interface/', '/core-3568/hardware-design/']],
];

const config: Config = {
  title: 'Mixtile Documentation',
  tagline: 'Guides and references for Mixtile single-board computers, system-on-modules and clusters',
  favicon: 'img/favicon.ico',

  future: {v4: true},

  // Custom domain serves from the domain root, so baseUrl is independent of the repo name.
  url: 'https://docs.mixtile.com',
  baseUrl: '/',
  // GitHub Pages serves directory URLs; matching it avoids redirects.
  trailingSlash: true,
  organizationName: 'mixtile',
  projectName: 'mixtile-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  markdown: {format: 'mdx'},

  i18n: {
    defaultLocale: 'en',
    // zh is not published until the Chinese pages catch up with English.
    // i18n/zh/ stays in the repo as the translation workspace. To preview or
    // publish it, add 'zh' back here and a {type: 'localeDropdown'} navbar item.
    locales: ['en'],
    localeConfigs: {
      en: {label: 'English'},
      zh: {label: '简体中文'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Ordering comes from sidebar_position; without this, a file such as
          // 30-pin-header.md loses its "30-" to the number-prefix parser.
          numberPrefixParser: false,
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: moved.map(([to, from]) => ({to, from})),
      },
    ],
    excludeUnpublishedAssets,
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      logo: {alt: 'Mixtile', src: 'img/logo.svg', href: '/', width: 120},
      items: [
        {
          type: 'dropdown',
          label: 'Products',
          position: 'left',
          items: [
            {type: 'docSidebar', sidebarId: 'blade3', label: 'Mixtile Blade 3'},
            {type: 'docSidebar', sidebarId: 'edge2', label: 'Mixtile Edge 2'},
            {type: 'docSidebar', sidebarId: 'core3588e', label: 'Mixtile Core 3588E'},
            {type: 'docSidebar', sidebarId: 'clusterbox', label: 'Mixtile Cluster Box'},
            {type: 'docSidebar', sidebarId: 'core3568', label: 'Mixtile Core 3568'},
          ],
        },
        {href: 'https://github.com/mixtile/mixtile-docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [{label: 'License', to: '/license/'}],
      copyright: `Copyright © ${new Date().getFullYear()} Mixtile. Content licensed under CC BY 4.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'ini', 'diff', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
