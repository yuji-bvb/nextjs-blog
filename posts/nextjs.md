---
title: "Next.js(SSG,ISR,Tailwind CSS)"
date: "2021-01-05"
---

---

# Next.js 周りについて

- SSG:静的なページ
  - ex)Document,Help,Contact
- SSG + Pre-fetch: + ビルド時に DB からの情報を HTML に埋め込む
  - ex)ブログや商品一覧
- SSG + Client side fetching: + リアルタイムで DB から取得、表示
  - ex)Todo,Dashboard(SEO の必要なし)
- SSG + Pre-fetch + Client side fetching:

  - ex)ニュースサイト

- ISR(Incremental Static Regeneration):Stale while revalidation

  - ページにアクセスがあると最新データで HTML を再生成
  - revalidate:5[s]:再生成後 5s 間は他のアクセスがあっても HTML 再生成は行わない llllll

- Tailwind CSS
  - class のユーティリティ集
  - ex)className="m-3 flex"
