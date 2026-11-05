# telegram-bot-docs

使用 Java 和 tio-boot 开发 Telegram 机器人的文档。

- 文档站：https://telegram-bot.io.nexus/
- 相关项目：[telegram-bot-base](https://github.com/litongjava/telegram-bot-base)、[telegram-bot-utils](https://github.com/litongjava/telegram-bot-utils)
- 拆分自 [tio-boot-docs](https://github.com/litongjava/tio-boot-docs)

## 本地开发

```bash
pnpm install
pnpm docs:dev
```

## 构建

```bash
pnpm docs:build
```

构建产物位于 `docs/.vitepress/dist`。

## 部署

推送到 `main` 分支后，Cloudflare Pages 会自动构建并发布。
