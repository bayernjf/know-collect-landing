---
title: "AI 视频总结怎么用：用 VideoVault 一键提炼视频要点"
description: "视频越收藏越多，根本看不完。本文介绍如何用 AI 给视频生成总结，兼容 OpenAI、DeepSeek、通义千问、Ollama，以及未配置 API 时的 mock 回退策略。"
pubDate: 2026-08-04
lang: "zh"
tags: ["AI总结", "OpenAI", "DeepSeek", "Ollama"]
---

## 视频收藏的二次痛点

收藏不是终点。当你收藏了上百个视频，新的问题出现了：根本看不完。复习时要不要重看整段？哪个视频讲了我现在需要的知识点？

AI 视频总结解决的就是这个问题：用一段话提炼视频要点，帮你快速判断是否值得完整观看，以及定位关键信息。

## VideoVault 的 AI 总结架构

VideoVault 的 AI 调用统一走 OpenAI 兼容的 `/chat/completions` 接口。这意味着只要服务兼容 OpenAI API 格式，就能接入：

- **OpenAI**：GPT 系列
- **DeepSeek**：deepseek-chat 等
- **通义千问**：qwen 系列（兼容模式）
- **Ollama**：本地部署的任意开源模型，零成本、零延迟、零隐私顾虑

用户只需在设置里填入 API Base URL、API Key 和模型名即可。所有调用支持超时与错误处理，不会因为模型服务异常导致界面卡死。

## 未配置时的 mock 回退

一个常见问题：没配 API Key 还能用吗？

VideoVault 的回答是：能。未配置 AI 时自动回退到 mock 模式，返回一段占位总结，让用户完整体验「收藏 → 总结 → 查看」的流程。这对初次试用和演示场景非常友好——不必先去申请 API Key 才能看效果。

`testAIConnection` 函数负责测试连接，配置后可一键验证模型服务是否可达。

## 本地模型与隐私

对隐私敏感的内容，推荐用 Ollama 本地部署。VideoVault 调用 `localhost` 的 Ollama 服务，视频元数据与总结请求不经过任何外部服务器。

这与 VideoVault 的本地优先理念一致：数据归你，模型也归你。

## 小结

AI 视频总结把「收藏夹」从链接仓库升级为知识库。VideoVault 通过兼容任意 OpenAI 格式服务、mock 回退和本地模型支持，让 AI 总结在不同预算和隐私要求下都能落地。
