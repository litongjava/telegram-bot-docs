# telegram-bot-base

telegram-bot-base 和 telegram-bot-utils 是笔者开发的 Telegram 机器人工具库，基于 [TelegramBots](../telegram-bots/) 封装常用操作。**开发新机器人时推荐使用。**

| 库 | 内容 |
| --- | --- |
| [telegram-bot-utils](https://github.com/litongjava/telegram-bot-utils) | 全局客户端 `TelegramClientCan`、多线程长轮询 `LongPollingMultiThreadUpdateConsumer`，以及发送消息、键盘、图片和视频的工具类 |
| [telegram-bot-base](https://github.com/litongjava/telegram-bot-base) | 依赖 telegram-bot-utils，增加 `/echo`、`/info` 命令和 `GetChatIdService`、`AdminCheckService` |

## 安装

这两个库目前没有发布到 Maven Central，需要先从源码安装到本地 Maven 仓库。telegram-bot-base 依赖 telegram-bot-utils，所以先安装后者：

```bash
git clone https://github.com/litongjava/telegram-bot-utils.git
cd telegram-bot-utils && mvn -DskipTests install && cd ..

git clone https://github.com/litongjava/telegram-bot-base.git
cd telegram-bot-base && mvn -DskipTests install
```

然后在项目中引入：

```xml
<dependency>
  <groupId>com.litongjava</groupId>
  <artifactId>telegram-bot-base</artifactId>
  <version>1.0.0</version>
</dependency>
```

只需要工具类时，把 `artifactId` 换成 `telegram-bot-utils`。

## 阅读顺序

1. [使用 telegram-bot-base 开发翻译机器人](./01.md)：从配置到长轮询、WebHook 的完整示例
2. [tio-boot 整合 Telegram-Bot-Utils](./02.md)：只使用工具库时的整合方式
3. [工具类参考](./03.md)：所有工具类及其方法
