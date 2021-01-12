---
title: "django"
date: "2020-12-22"
---

---

# django_restframework

- settings.py
  - 大きな設定(DB,ENV,APP,AUTH,STATIC...)
- models.py
  - db 構造の作成
  - migrate することで DB に落とし込む
- serializers.py
  - フロントエンドに渡す情報の加工を行う
  - データの入出力を扱い、モデルへの橋渡しをするクラス
  - class,model,fields,extra_kwargs
  - デフォルトからの変更など(日付のフォーマットやパスワードのハッシュ化)
- admin.py
  - dashbord で見るための設定
- views.py
  - 見た目を調整するためのもの
- urls.py(プロジェクトとアプリにそれぞれある)
  - パスの設定
