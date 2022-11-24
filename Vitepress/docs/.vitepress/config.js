import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '模版工程',
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '最后更新',
    sidebar: getSidebar(),
  },
});

function getSidebar() {
  return [
    {
      text: '菜单1',
      collapsible: true,
      items: [
        {
          text: '标题1',
          link: '/菜单1/标题1',
        },
      ],
    },
    {
      text: '菜单2',
      items: [
        { text: '标题2', link: '/菜单2/index' },
      ],
    },
  ];
}
