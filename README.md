# 金沢大学 核医学 Webサイト（新サイト 試作）

[Astro](https://astro.build/) で作った静的サイトです。`main` ブランチに push すると GitHub Actions が自動でビルドし、GitHub Pages に公開されます。

- 公開URL（GitHub Pages）: https://metavol.github.io/test_nmku/
- 旧サイト: https://nucmed.w3.kanazawa-u.ac.jp/

## お知らせを追加する（プログラミング不要）

1. GitHub で `src/content/news/` フォルダを開く
2. 「Add file → Create new file」
3. ファイル名を `2026-11-01-example.md` のように「日付-短い英語名.md」にする
4. 次の内容を書いて「Commit changes」

```markdown
---
title: "医局説明会を開催します（2026年11月）"
date: 2026-11-01
category: 医局
---

本文をここに書きます。**太字**、[リンク](https://example.com)、箇条書きが使えます。
```

`category` は次のいずれか：`トピックス` `論文` `受賞` `学会` `医局` `診療` `教育`

数分後に自動で公開されます。写真を載せる場合は `public/images/news/` に画像をアップロードし、本文に `![説明](/test_nmku/images/news/ファイル名.jpg)` と書きます。

## ページの構成

| URL | ファイル | 内容 |
|---|---|---|
| `/` | `src/pages/index.astro` | トップ |
| `/message/` | `src/pages/message.astro` | 教授あいさつ |
| `/about/` `/staff/` | `about.astro` `staff.astro` | 教室紹介・沿革、スタッフ |
| `/clinical/` 以下 | `src/pages/clinical/` | 診療、検査・専門分野、核医学治療 |
| `/research/` | `research.astro` | 研究 |
| `/teaching/` | `teaching.astro` | 教育／研修 |
| `/achievements/` | `achievements.astro` | 業績・研究費・受賞 |
| `/news/` | `src/content/news/*.md` | お知らせ（自動生成） |
| `/patients/` 以下 | `src/pages/patients/` | 患者さん向け |
| `/links/` `/contact/` | | リンク、お問い合わせ |
| `/kenkyukai/` `/conference/` | | 北陸循環器核医学研究会、核医学カンファレンス |

ページ内の黄色い枠（`class="todo"`）は、公開前に差し替え・追記が必要な箇所の目印です。

## 本番（学内サーバー）への移行

1. `astro.config.mjs` の `site` を本番URL、`base` を `'/'` に変更
2. `npm run build` で `dist/` に静的HTMLが生成される
3. `dist/` の中身をそのままサーバーに配置

## ローカルで開発する

```bash
npm install
npm run dev      # http://localhost:4321/test_nmku/
npm run build    # dist/ に出力
```
