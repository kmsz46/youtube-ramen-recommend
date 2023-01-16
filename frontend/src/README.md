# フロントエンドについて
## 各種コンポーネントについて
### GenrePick.tsx
ラジオボタンで探したいラーメンのジャンルを選択し、APIを叩くコンポーネント

<img width="275" alt="スクリーンショット 2023-01-16 12 42 00" src="https://user-images.githubusercontent.com/79000447/212594029-4f189124-3b54-470d-aae4-98a3e21518f8.png">

```
# 受信
"genre":<string>"iekei"
# 送信（APIから得たデータ）
"data":<Array>[{
    'id':number
    'title':string,
    'lat':number,
    'lng':number,
    'youtube_link':string
    'youtube_id':string
    'shop_name':string
    'shop_place':string
    'shop_link':string
},...]
```

### MapView.tsx
APIサーバから得たデータをもとに店舗をマップ上にプロットし、クリックされた店舗の情報を抽出するコンポーネント
<img width="275" alt="スクリーンショット 2023-01-16 12 42 12" src="https://user-images.githubusercontent.com/79000447/212594426-446527cb-8f16-4ae9-87f0-4ff8e5a60406.png">

```
# 受信
"data":<Array>[{
    'id':number
    'title':string,
    'lat':number,
    'lng':number,
    'youtube_link':string
    'youtube_id':string
    'shop_name':string
    'shop_place':string
    'shop_link':string
},...]

# 送信
"select":{
    'id':number
    'title':string,
    'lat':number,
    'lng':number,
    'youtube_link':string
    'youtube_id':string
    'shop_name':string
    'shop_place':string
    'shop_link':string
}
```


### VideoView.tsx
選択された情報をもとにYouTubeの埋め込みと店舗情報のリンクを表示するコンポーネント

<img width="265" alt="スクリーンショット 2023-01-16 12 42 29" src="https://user-images.githubusercontent.com/79000447/212594858-3f255933-0786-4a49-a848-119b6e40cf70.png">

```
#受信
"select":{
    'id':number
    'title':string,
    'lat':number,
    'lng':number,
    'youtube_link':string
    'youtube_id':string
    'shop_name':string
    'shop_place':string
    'shop_link':string
}
```