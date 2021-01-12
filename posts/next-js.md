---
title: "next.js tut"
date: "2020-12-21"
---

---

# `<Link href="/"></Link>`

a タグをラップしたもの。ページ間の移動

コンポーネントは必ず`default`エクスポート

`pages`ディレクトリ配下のファイルがルーティングになる

# メタデータの変更

```javascript
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>create next app</title>
        <link rel="icon" href="/favicon" />
      </Head>
    </>
  );
}
```

# layout コンポーネント(共通)

- `components`という名前のディレクトリをトップレベルに作成
- その中に`layout.js`を作成

```javascript
function Layout({ children }) {
  return <div>{children}</div>;
}

export default Layout;
```

`pages/posts/first-post.js`

```javascript
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
```

## 全てのページ共通`_app.js`

`pages`の直下
