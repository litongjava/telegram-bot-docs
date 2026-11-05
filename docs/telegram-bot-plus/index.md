# telegram-bot-plus

::: warning 现阶段需要自行下载构建
telegram-bot-plus 还没有发布到 Maven Central，现阶段需要自行下载源码并构建安装，否则 Maven 找不到依赖。步骤见[安装](#安装)。
:::

[telegram-bot-plus](https://github.com/litongjava/telegram-bot-plus) 是笔者开发的 Java Telegram 机器人开发套件，基于 [TelegramBots](../telegram-bots/) 封装常用操作。**开发新机器人时推荐使用。**

[max-translator-bot](https://github.com/litongjava/max-translator-bot) 是基于它开发的中英翻译机器人，可以作为完整的参考项目。

## 模块

| 模块 | 内容 |
| --- | --- |
| `telegram-bot-plus-utils` | 全局客户端、发送限流、更新消费、消息、键盘、媒体和频道信息工具 |
| `telegram-bot-plus-base` | 依赖 utils，增加 `/echo`、`/info` 命令和基础服务 |

主要依赖版本：Java 21、TelegramBots 9.1.0。

## 安装

现阶段没有发布到 Maven Central，需要自行下载源码，用 Java 21 构建并安装到本地 Maven 仓库：

```bash
git clone https://github.com/litongjava/telegram-bot-plus.git
cd telegram-bot-plus
mvn clean install -DskipTests -Dgpg.skip=true
```

然后在项目中引入：

```xml
<dependency>
  <groupId>io.nexus</groupId>
  <artifactId>telegram-bot-plus-base</artifactId>
  <version>1.0.0</version>
</dependency>
```

只需要工具类时，把 `artifactId` 改为 `telegram-bot-plus-utils`。

## 从旧库迁移

1. 把 `telegram-bot-base`、`telegram-bot-utils` 依赖替换为上面的坐标。
2. 把 `com.litongjava.telegram.*` 的导入、反射类名和包扫描配置改为 `io.nexus.telegram.*`。
3. 注意区分两个分组：本套件是 `io.nexus`，tio-boot、java-db 等底层库是 `nexus.io`。
4. 使用 Java 21 重新编译。
5. `RateLimiterManager` 的 `getSemaphore30()` 等信号量入口已移除，改用 `acquireAsync` 或 `TelegramClientCan`。
6. 消费者增加了 `close()`，退出顺序见[并发、限流与退出](./03.md#退出顺序)。

## 阅读顺序

1. [快速开始](./01.md)：最小的回声机器人
2. [开发翻译机器人](./02.md)：逐步讲解 max-translator-bot
3. [并发、限流与退出](./03.md)：消息顺序、发送限流、重试和资源关闭
4. [WebHook 模式](./04.md)：不使用长轮询时如何接入
5. [工具类参考](./05.md)：所有工具类及其方法
