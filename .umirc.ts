import { defineConfig } from 'dumi';

const repo = 'cherry-ui';

export default defineConfig({
  title: 'Cherry UI',
  favicon: 'https://s1.ax1x.com/2023/06/19/pC3ZrNR.png',
  logo: 'https://s1.ax1x.com/2023/06/19/pC3ZrNR.png',
  // outputPath: 'docs-dist',
  outputPath: 'doc-site', // 输出文件夹
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : undefined,
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : undefined,
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  // more config: https://d.umijs.org/config
});
