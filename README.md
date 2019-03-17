# Tippy Customer Side

店舗と顧客を感謝で繋ぐサービス Tippy. [eastgate](https://www.eastgate.tokyo/)用のカスタマーサイドのアプリケーションレポジトリ. クライアントサイドは[こちら](https://www.eastgate.tokyo/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/821000d0-83b1-42e4-9dad-b7f8f5d25799/deploy-status)](https://app.netlify.com/sites/f4/deploys)

## 起動

### local

```
$ yarn install

// DBセットアップ
$ yarn run mock:local

$ yarn run dev:local
```

### prd

環境変数に `REACT_APP_ENV=propduction` をセット

```
$ yarn run deploy
```

## 開発

CI/CD

```
// 静的型検査
$ yarn run flow

// テスト実行
$ yarn run test
```

CD は Netlify にて、レポジトリへの push を hook している.
