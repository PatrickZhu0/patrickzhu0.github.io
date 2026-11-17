# 学习手记

一个由 GitHub Pages 托管的中文游戏开发博客。

## 发布 Markdown 文章

在 `_posts` 目录创建 `YYYY-MM-DD-文章英文短名.md`。文件名中的日期用实际发布日期，短名可用小写英文和连字符。文件开头写标题，下面写 Markdown 正文。

```markdown
---
title: "我的游戏开发笔记"
description: "这篇文章的简短介绍。"
category: "Unity"
# image: "/assets/images/my-post/cover.webp"
# image_alt: "Unity 场景中的角色测试画面"
---

## 遇到的问题

在这里写正文。
```

`title` 是标题，`description` 和 `category` 可按需填写。要使用封面，上传图片后填写 `image` 和 `image_alt`。使用带语言标记的 Markdown 围栏代码块，例如 ```csharp，文章页会显示语法高亮和复制按钮。包含至少两个二级或三级标题时，文章页会自动显示目录。

提交到 `main` 后，GitHub Pages 会生成文章页，首页、归档和 RSS 自动更新。公开仓库的 `_posts` 目录只存放可公开发布的内容。

## 评论与访问统计

读者可以在 GitHub Discussions 回复。为新文章建立独立讨论后，把讨论网址填到文章的 `discussion_url`。

要启用访问统计，在 Cloudflare Web Analytics 中手动添加 `patrickzhu0.github.io`，把安装代码中的站点 token 填到 `_config.yml` 的 `cloudflare_web_analytics_token`。这只需要站点的公开追踪标识。
