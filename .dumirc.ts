import { defineConfig } from 'dumi';

const repo = 'cherry-ui';

export default defineConfig({
  themeConfig: {
    name: 'cherry-ui',
    logo: 'https://pic.imgdb.cn/item/651f9d60c458853aef97ec19.png',
    socialLinks: {
      github: 'https://github.com/Zyzzzaaa/cherry-ui',
    },
  },
  theme:{
    '@c-primary': '#b62021',
    'primary-color': '#b62021',
  },
  favicons: ['https://pic.imgdb.cn/item/651f9d60c458853aef97ec19.png'],
  outputPath: 'doc-site', // 输出文件夹
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : undefined,
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : undefined,
  exportStatic: {},
});
