---
title: "How to Choose a Cross-platform Video Bookmark Tool: Douyin, Bilibili, and Xiaohongshu in One Place"
description: "You bookmark a great video, only to find Douyin, Bilibili, and Xiaohongshu favorites are siloed — and gone when you switch devices. This post walks through the pain points and how VideoVault solves them."
pubDate: 2026-08-03
lang: "en"
tags: ["cross-platform", "douyin", "bilibili", "xiaohongshu"]
---

## The Pain of Cross-platform Video Bookmarking

In the short-video era, good content is scattered across platforms: Douyin tutorials, Bilibili long-form, Xiaohongshu recommendations. Each platform has its own favorites, but they are isolated — your Douyin saves are invisible on Bilibili, and Xiaohongshu favorites vanish when you switch devices.

Limitations of common approaches:

- **Browser bookmarks**: links only, no titles or covers, break when platforms remove videos, no way to organize by content.
- **Notion notes**: manual copy-paste of titles, links, and notes — high friction, hard to sustain.
- **Platform-native favorites**: siloed per platform, no cross-platform search, depend on login state across devices.

## What One-stop Bookmarking Requires

A viable cross-platform bookmarking solution must meet three criteria:

1. **Paste a link to save** — auto-detect the platform, no manual categorization.
2. **Auto-fetch metadata** — titles, authors, and covers filled automatically, near-zero bookmarking cost.
3. **You own the data** — local or self-hosted, not tied to a platform account's survival.

## One-stop Bookmarking with VideoVault

VideoVault is an open-source cross-platform video bookmark manager. The first release supports Douyin, Bilibili, and Xiaohongshu.

### Paste a Link to Save

Copy a video link from Douyin (including v.douyin.com short links), Bilibili, or Xiaohongshu (including xhslink.com share links) and paste it into VideoVault. `parseVideoUrl` auto-detects the platform and extracts the videoId — no manual platform selection.

### Auto-fetch Covers and Authors

To bypass CORS, VideoVault fetches metadata via a proxy: the Vite `/api/meta` middleware in dev, and the Supabase Edge Function `fetch-meta` in production. Cover sources cover `og:image`, `twitter:image`, `<link rel="image_src">`, and JSON-LD `thumbnailUrl`; authors prefer JSON-LD with OG fallback. On error, platform emoji icons are used.

### Folders and Notes

Organize cross-platform videos with folders — say "frontend tutorials", "recommendations", "follow-along series". Add personal notes and annotations per video to capture key moments or takeaways.

## Data Ownership and Offline Access

VideoVault is local-first: without Supabase configured, it runs in pure local mode with data in browser localStorage — no login, fully offline. With Supabase, data is isolated per user via Row Level Security (RLS), enabling cloud sync and multi-device access.

All data supports import and export — no lock-in. Even if you stop using VideoVault, your bookmarks remain portable to other tools.

## Summary

The key to cross-platform video bookmarking is not "saving a link" but turning scattered videos across platforms into an organized, summarized, reviewable knowledge base. VideoVault uses auto metadata fetching, folder grouping, and AI summaries to minimize bookmarking cost while keeping data yours.
