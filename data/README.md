# データの収集・加工
SUSURU TVの再生リストから概要欄の情報を収集・情報抽出を行うためのディレクトリ
※API KEYやファイル名など実環境と異なるため、ここに置かれているコードは動きません

## 使用技術
- YouTube Data API
- Geocording API
- テキスト解析

## 各種ノートブックの説明
### 1.GetURL.ipynb
YouTube Data APIを用いて、再生リストから動画のURLを取得するためのコードが記載されています。
<img width="612" alt="image" src="https://user-images.githubusercontent.com/79000447/212596928-afc6fdbe-2228-4229-bc5c-7470d6918cf6.png">

### 2.DataExtention.ipynb
YouTube Data APIを用いて、各動画から概要欄を収集し、テキスト解析により店舗名、店舗住所、店舗詳細のURLを抽出するためのコードが記載されています。
<img width="478" alt="susuru2" src="https://user-images.githubusercontent.com/79000447/212597113-06c36625-4178-4ee6-b010-d8309a6957b2.png">

### 3.GeocordingAPI.ipynb
Geocording APIを用いて、取得した店舗住所を座標データに変換するためのコードが記載されています。
<img width="608" alt="susuru3" src="https://user-images.githubusercontent.com/79000447/212597318-5333ce59-6a00-4cda-bdc2-f57a4269225f.png">

### 4.FireStoreWrite.ipynb
抽出、整理したデータをFireStoreで管理するためのコードが記載されています。