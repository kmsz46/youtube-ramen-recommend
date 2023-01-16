import React from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@mui/material/Link';

// 渡されるデータの方を定義
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

type VideoDataProps = {
    select: SelectedType | any
}

const VideoView = (props:VideoDataProps) => {
  const youtube_emb_url = "https://www.youtube-nocookie.com/embed/" + props.select.youtube_id
  return (
    // MUIを用いない場合
    // <div>
    //   <h1>動画タイトル：{props.select.title}</h1>
    //   <iframe 
    //      width="560" 
    //      height="315" 
    //      src={youtube_emb_url}
    //      title="YouTube video player" 
    //      frameBorder="0" 
    //      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    //      allowFullScreen>
    //   </iframe>
    //   <h2>店舗名：{props.select.shop_name}</h2>
    //   <h2>店舗URL：{props.select.shop_link}</h2>
    //   <h2>Youtubeリンク：{props.select.youtube_link}</h2>
    // </div>
    <Card>
    <CardContent>
      <Typography variant="h5" color="textSecondary">
        SUSURUTV
      </Typography>
      <br/>
      <iframe 
          width="320" 
          height="180" 
          src={youtube_emb_url}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
      </iframe>
      <br/>
      <Link href={props.select.shop_link}>
        店舗の詳細
      </Link>
      <br/>
      <Link href={props.select.youtube_link}>
        Youtubeのリンク
      </Link>
    </CardContent>
  </Card>
  )
}

export default VideoView