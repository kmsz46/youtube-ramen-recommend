# データの収集・加工
SUSURU TVの再生リストから概要欄の情報を収集・情報抽出を行うためのディレクトリ
<br>※API KEYやファイル名など実環境と異なるため、ここに置かれているコードは動きません

## 使用技術
- YouTube Data API(https://developers.google.com/youtube/v3/getting-started?hl=ja)
- Geocording API(https://developers.google.com/maps/documentation/javascript/geocoding?hl=ja)
- テキスト解析

## 各種ノートブックの説明
### 1.GetURL.ipynb
YouTube Data APIを用いて、再生リストから動画のURLを取得するためのコードが記載されています。

<img width="612" alt="image" src="https://user-images.githubusercontent.com/79000447/212596928-afc6fdbe-2228-4229-bc5c-7470d6918cf6.png">

### 2.DataExtention.ipynb
YouTube Data APIを用いて、各動画から概要欄を収集し、テキスト解析により店舗名、店舗住所、店舗詳細のURLを抽出するためのコードが記載されています。

<img width="608" alt="susuru4" src="https://user-images.githubusercontent.com/79000447/212598258-90e23ab7-f788-4120-9e11-cd2517ce8ff0.png">

### 3.GeocordingAPI.ipynb
Geocording APIを用いて、取得した店舗住所を座標データに変換するためのコードが記載されています。

<img width="608" alt="susuru3" src="https://user-images.githubusercontent.com/79000447/212597318-5333ce59-6a00-4cda-bdc2-f57a4269225f.png">

### 4.FireStoreWrite.ipynb
抽出、整理したデータをFireStoreで管理するためのコードが記載されています。