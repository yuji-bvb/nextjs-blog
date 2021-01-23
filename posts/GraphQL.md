---
title: 'GraphQl'
date: '2021-01-21'
---

---

## GraphQl

- Web API のためのクエリ言語
- query 言語で柔軟なデータ取得が可能
- フィルター条件も付けられる
- ネストしたオブジェクトでも一度で取得できる
- 一つのエンドポイントで必要なデータを必要な分だけ取得できる

- query → SELECT(SQL) restAPI で言う get
- mutation → INSERT/UPDSTE/DELETE(SQL)
- subscription → サーバー側の変化を監視

#### Relay Server Specification

- GraphQL の拡張使用(GitHub API Ver4)
- Relay Node(Globally unique ID)
- Relay Connection(Edge,Node,cursor based pagination)
- Relay Mutation(ex)入力は input という引数)

## REST API

- 必要ない属性も取得してしまう
- ネストしたオブジェクトの場合複数のエンドポイントにアクセスが必要
-

- Pagination(cursor based pagination)
  - 大量のデータのフェッチを分けて行うこと
