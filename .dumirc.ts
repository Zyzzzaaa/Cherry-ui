import { defineConfig } from 'dumi';

const repo = 'cherry-ui-react';

export default defineConfig({
  themeConfig: {
    name: 'cherry-ui-react',
    logo: 'https://s1.ax1x.com/2023/06/19/pC3ZrNR.png',
    socialLinks: {
      github: 'https://github.com/Zyzzzaaa/cherry-ui',
    },
  },
  theme:{
    '@c-primary': '#b62021',
    'primary-color': '#b62021',
  },
  favicons: ['https://s1.ax1x.com/2023/06/19/pC3ZrNR.png'],
  outputPath: 'doc-site', // 输出文件夹
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : undefined,
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : undefined,
  exportStatic: {},
});
