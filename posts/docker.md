---
title: "docker"
date: "2021-01-04"
---

---

# docker

- 仮想環境を動かす仕組み、構築する
  - Mac の上で Windows や Linux が動かせることのようなもの
- コマンドで簡単に設定できる
- コードで管理できる、環境の共有が容易(様々なバージョンなど)
- Docker の環境毎デプロイできる
- ホスト OS

  - docker
    - イメージ(mysql,nginx..)(クラス)
    - dockerhub で入手
      - コンテナ(インスタンス)
      - プロジェクトではそれぞれサーバーや DB 等複数のコンテナを作成する
      - イメージからコンテナを作成することを**ビルド**

- dockerfile
- dockercompose
  - 複数のコンテナの一元管理
  - docker-compose.yml というファイル
