// nav导航栏配置
import { 
    bookMark
} from "./Svgicons"

export const Nav = [
  {
    text: "🏡首页",
    link: "/",
  },
  {
    text: "📖知识专栏",
    items: [
      {
        text: "计算机基础知识",
        link: '01.计算机基础知识',
      },
      {
        text: "人工智能技术",
        link: '02.人工智能技术',
      },
      {
        text: "网络安全技术",
        link: '03.网络安全技术',
      },
      {
        text: "Java全栈开发技术",
        link: '04.Java全栈开发技术',
      },
      {
        text: "数学",
        link: '05.数学',
      },
      {
        text: "英语",
        link: '06.英语',
      },
      {
        text: "钢琴",
        link: '07.钢琴',
      },
    ],
  },
  {
    text: "🧰工具资源", // 目录页链接，此处 link 是 vdoing 主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
        
    ],
  },
  {
    text: "📒笔记",
    link: '30.笔记',
  },
  { text: "👂畅所欲言", link: "/message-area/" },
  {
    text: "👏功能页",
    items: [
          { text: "文章分类", link: "/categories/" },
          { text: "文章标签", link: "/tags/" },
          { text: "文章归档", link: "/archives/" },
          { text: "文章清单", link: "/articleOverview/" },
    ],
  },
  {
    text: "🌐站点信息",
    items: [
      {
        component: "关于我",
        // props: AboutIcon,
      },
      {
        component: "NavIcon",
        // props: LinkIcon,
      },
    ],
  },
];