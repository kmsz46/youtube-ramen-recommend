# vite-react-typescript
# 使用技術(順次追加します)
- vite
- react
- typescript
# 初期起動時
## 作業ディレクトリの作成
```
yarn create vite@latest
```
順次、作業ディレクトリの名前の入力（私の場合frontend）使用するフレームワークとJSかTSを選択(私の場合ReactとTypescript)してください。
## package.jsonの変更
package.json
```
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tamagui/vite-plugin": "^1.0.3",    //追加
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tamagui-loader": "^1.0.3"   // 追加
  },
  "devDependencies": {
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.9",
    "@vitejs/plugin-react": "^3.0.0",
    "typescript": "^4.9.3",
    "vite": "^4.0.0"
  }
}
```
## パッケージのインストール&アプリケーションの起動
```
cd frontend
yarn
yarn dev
```


## 参考URL
https://vitejs.dev/guide/ 