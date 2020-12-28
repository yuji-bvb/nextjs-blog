---
title: "Next.js講座"
date: "2020-12-27"
---

# Next.js チュートリアル解説

## next.js

- create-react-app では足りない部分が解決される
  - 簡単に機能を使うことがきる
- Hot reloading で自動でブラウザが変更される(開発をしやすく)
- 必ず default エクスポートする
- Link タグと a タグの違いはページが更新されるかどうか
  - a タグはページ遷移が発生するスピードが落ちる、外部サイトに飛ぶ時にはたまに使用
  - className といった属性を加える必要があるときは、 Link タグでなく、a タグに
- ファイルシステムのルーティングは react-router より圧倒的に楽
- ページ遷移はクライアントサイドで行うのが今時、JS で行う。
- 必要な分だけ呼び出すのでめちゃくちゃ早い(SSG)。
  - Link タグがある場合は裏側で読み込みを行う。
  - ビューページの読み込みが全て終わった後なのでパフォーマンスへの影響がない。
- 純粋な SPA ではない、純粋な物は index.html 一つだけであとは JS だけでできている。
  - ページ毎に index.html ができる
- /は public ディレクトリのこと
- メタデータ:Head タグに記載=>ページ毎の SEO 対策
- **pages** , **public** はファイル名を指定されている
  - それ以外指定はない

## layout

- 全ページ共通のコンポーネント

## css

- style jsx css in js
- css モジュール
  - import **styles** でなく **classes** の方が名前的に良いのでは？
- css も必要な分だけ読み込まれる
- material-ui はかなり使われている,materiau-ui もうすぐアップデートされる
- next.js の github を見れば有名どころなら使い方がのっている
- css に関しては何を使うかは好みの問題
  - tailwind を公式は使用している(css モジュールより)
  - css モジュールの方が生の CSS なのでパフォーマンスが良い
- module.css はコンポーネント単位でしか効かない
  - 全体へは pages/\_app.js ないに gloabal.css を import
  - styles ディレクトリを作成して global.css を作成して\_app.js で読み込む
    - global.css の場所はどこでも良い
- clsx ライブラリーをインポートすると class で場合わけできる className は古い

## プリレンダリングとデータフェッチ

- 生の React は JS で全てレンダリングする
  - next は HTML で読み込まれる
- **静的生成(SSG)はビルド時に HTML が生成される。革新的手法**
  - スピードが早くリクエストに対する負担が少ない
  - サーバー側で行われる。
- **ほとんどの場合は SSG が優れている。**
  - 一度ビルドされたら CDN によって提供されるので高速になる
  - isr:ssg を何秒間隔で行うか決められる。これは難しい
- SSG はビルド時に HTML 生成
- SSR はサーバーで fetch して HTML 生成
- CSR はクライアントで fetch して HTML 生成
- ローティング OK なら CSR(クライアントサイドレンダリング)
- next.js 内でサーバー側もかける
  - node.js はここから増えていくんじゃないか
- pages ディレクトリの中のみで **getStaticProps**,**getServerSideProps** 使用可能
  - 使い分けは get~を変更するだけ
- **page 毎に getStaticProps,getServerSideProps を選ぶだけでハイブリッドなアプリを作れる**
- useSWR はおすすめ、Redux とは相性悪い
  - SWR にも状態管理が含まれるため
- ヘッドレス CMS でブログを書く方が良い、**ファイルシステムをたくさん使用することはあまりない**
- getStaticPath ビルド時に予め ID の取りうるを値を取得する
- date-fns はよく使われる

## API ルート

- サーバーレス関数はキー情報などを叩く場合に使う
  - post するときに使用

## ホスティング

- next.js の利点でもある vercel
  - ホスティングまでサポート
  - ドメインも取れる、google か vercel で取得が良い
  - 環境変数も便利に使用可能
- lighthouse はサイトのスピード
- 状態管理は Redux か SWR,recoil?

## next 以外

- iterm2 が一番使われている。code .で vscode へ飛べる
- 画像変換は squoosh がいい
- デバッグは console.log で行う
- [拡張機能](https://chrome.google.com/webstore/detail/octotree-github-code-tree/bkhaagjahfmjljalopjnoealnfndnagc?hl=ja){:target="\_blank"}
