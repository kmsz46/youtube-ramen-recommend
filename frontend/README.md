# vite-react-typescript
# 使用技術(順次追加します)
- vite
- react
- typescript
# 初期起動時
## 作業ディレクトリの作成
```
yarn create vite
```
順次、作業ディレクトリの名前の入力（私の場合frontend）使用するフレームワークとJSかTSを選択(私の場合ReactとTypescript)してください。

## パッケージのインストール&アプリケーションの起動
```
cd frontend
yarn
yarn dev
```
## 今回インストールしたパッケージ
```
"@emotion/react": "^11.10.5",
"@emotion/styled": "^11.10.5",
"@material-ui/core": "^4.12.4",
"@mui/material": "^5.11.4",
"@mui/styled-engine-sc": "^5.11.0",
"@react-google-maps/api": "^2.17.1",
"axios": "^1.2.2"
```

## build
firebase hostingでデプロイするためにbuildする
```
yarn build
```

## 参考URL
https://vitejs.dev/guide/