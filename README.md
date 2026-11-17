# 学习手记

一个由 GitHub Pages 托管的中文游戏开发博客。

## 发布 Markdown 文章

在 `_posts` 目录创建 `YYYY-MM-DD-文章英文短名.md`。文件名中的日期用实际发布日期，短名可用小写英文和连字符。文件开头写标题，下面写 Markdown 正文。

```markdown
---
title: "我的游戏开发笔记"
description: "这篇文章的简短介绍。"
category: "Unity"
---

## 遇到的问题

在这里写正文。
```

`title` 是标题，`description` 和 `category` 可按需填写。提交到 `main` 后，GitHub Pages 会生成文章页，首页自动按日期列出文章。公开仓库的 `_posts` 目录只存放可公开发布的内容。
