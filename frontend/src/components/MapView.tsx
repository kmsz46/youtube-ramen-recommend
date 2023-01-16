import React from 'react'
import { GoogleMap, LoadScript, InfoWindow} from "@react-google-maps/api"

// 渡されるデータの方を定義
type VideoDataProps = {
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

type SelectedType = {
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

type MapPropsType = {
    data: Array<VideoDataProps> | any
    setSelected: React.Dispatch<React.SetStateAction<SelectedType | undefined>>
}



// 画面サイズを440×440で表示する
const mapsize = {
  height: "350px",
  width: "350px",
}

// 東京駅のポジションをスタートにする
const centerpoint = {
  lat: 35.68148455048815,
  lng: 139.76717844177162
};



const MapView = (props:MapPropsType) => {
  const video_data = props.data.result
  // ピンの作成
  const pins = video_data.map((pin:VideoDataProps)=>
    <InfoWindow position={{lat: pin.lat, lng:pin.lng}} key={pin.id}>
      <div style={{ background: "white",fontSize: 5}}>
        <h3>{pin.shop_name}</h3>
        <button type="button" onClick={()=> props.setSelected(pin)}>
            詳細
        </button>
      </div>
    </InfoWindow>
  )

  return(
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GMAP_API_KEY}>
    {/* <LoadScript googleMapsApiKey="KEY"> */}
      <GoogleMap mapContainerStyle={mapsize} center={centerpoint} zoom={13}>
        {pins}
      </GoogleMap>
    </LoadScript>    
  )
}

export default MapView

// import { GoogleMap, LoadScript } from "@react-google-maps/api";

// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// const center = {
//   lat: 35.69575,
//   lng: 139.77521,
// };

// const MyComponent = () => {
//   return (
//     <LoadScript googleMapsApiKey="API Key">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={17}
//       ></GoogleMap>
//     </LoadScript>
//   );
// };

// export default MyComponent;