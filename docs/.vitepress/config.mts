import { defineConfig } from "vitepress";
import sidebar from "./sidebar.json";

export default defineConfig({
  lang: "zh-CN",
  title: "Telegram Bot",
  description: "使用 Java 和 tio-boot 开发 Telegram 机器人：Telegram4J、TelegramBots、tdlight 与翻译机器人实战",
  cleanUrls: true,
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  sitemap: { hostname: "https://telegram-bot.io.nexus" },
  markdown: { lineNumbers: true },
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "telegram-bot-base", link: "https://github.com/litongjava/telegram-bot-base" },
      { text: "全部项目", link: "https://io.nexus/projects" },
      { text: "Tio Boot", link: "https://tio-boot.com/" },
    ],
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/litongjava/telegram-bot-docs" }],
    search: { provider: "local" },
    editLink: { pattern: "https://github.com/litongjava/telegram-bot-docs/edit/main/docs/:path", text: "编辑此页" },
    outline: { level: [2, 3], label: "本页目录" },
    docFooter: { prev: "上一页", next: "下一页" },
    lastUpdated: { text: "最后更新" },
  },
});
