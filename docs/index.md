# Telegram Bot

::: warning 现阶段需要自行下载构建
telegram-bot-plus 还没有发布到 Maven Central，现阶段需要自行下载源码并构建安装，否则 Maven 找不到依赖。步骤见[安装](./telegram-bot-plus/#安装)。
:::

使用 Java 和 tio-boot 开发 Telegram 机器人的文档。

| 章节 | 内容 | 建议 |
| --- | --- | --- |
| [第 1 章 telegram-bot-plus](./telegram-bot-plus/) | 笔者开发的开发套件，以及基于它的翻译机器人 max-translator-bot | **推荐** |
| [第 2 章 TelegramBots](./telegram-bots/) | 底层库入门、整合 tio-boot，以及直接调用 HTTP API | 需要了解底层时阅读 |
| [第 3 章 tdlight](./tdlight/) | 使用 tio-boot 整合 tdlight | 需要 TDLib 能力时阅读 |
| [第 4 章 Telegram4J](./telegram4j/) | 基于 MTProto 的翻译机器人和错误处理 | **不推荐**：有并发问题，服务总是挂掉 |

新项目从[安装 telegram-bot-plus](./telegram-bot-plus/#安装)开始。

## 相关项目

- [telegram-bot-plus](https://github.com/litongjava/telegram-bot-plus)
- [max-translator-bot](https://github.com/litongjava/max-translator-bot)
