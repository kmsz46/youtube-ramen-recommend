import React, { useEffect } from 'react'
import './App.css'
import Axios from 'axios'

import GenrePick from './components/GenrePick'
import MapView from './components/MapView'
import VideoView from './components/VideoView'

type ResponceType = {
  result: any
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

function App() {
  const [genre, setGenre] = React.useState("iekei")
  const [response, setResponse] = React.useState<ResponceType>({
    result: []
  })
  const [selected, setSelected] = React.useState<SelectedType|undefined>({
    'id':0,
    'title':"",
    'lat':0,
    'lng':0,
    'youtube_link':"",
    'youtube_id':"",
    'shop_name':"",
    'shop_place':"",
    'shop_link':"",
  })

  const getShopdata = () => {
    Axios.post(import.meta.env.VITE_API_URL, {"genre":genre})
    .then(res => {
        setResponse({result:res.data.data});
    })
  }

  React.useEffect(()=>{
    getShopdata()
  })
  return (
    <div>
      <GenrePick genre={genre} setGenre={setGenre} getShopdata={getShopdata} />
      <MapView data={response} setSelected={setSelected}/>
      <VideoView select={selected}/>
    </div>
  )
}

export default App