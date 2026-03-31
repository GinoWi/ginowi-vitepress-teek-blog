import { defineConfig } from 'vitepress'
import { teekConfig } from "./teekConfig.mts";
import { Nav } from "./config/Nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GinoWi Blog",

  themeConfig: {

    logo: "/img/avatar.png",

    //导航栏信息
    nav: Nav,
  },

  extends: teekConfig,
})
