// ジャンル選択をするためのラジオボタンの実装
import React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

type GenrePropsType = {
  genre: string
  setGenre: React.Dispatch<React.SetStateAction<string>>
  getShopdata: (e:any) => void 
}

const GenrePick = (props:GenrePropsType) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setGenre(event.target.value)
    props.getShopdata(event.target.value)
  }
  return (
    <FormControl>
      <FormLabel id="ramen-genre-pick-radiogroup">ラーメンのジャンルを選択してください！</FormLabel>
      <RadioGroup
        row
        aria-labelledby="ramen-genre-pick-radiogroup"
        name="ramen-genre"
        onChange={handleChange}
      >
        <FormControlLabel value="iekei"  control={<Radio size="small"/>} label="家系"/>
        <FormControlLabel value="jiro" control={<Radio size="small"/>} label="二郎系"/>
        <FormControlLabel value="kara" control={<Radio size="small"/>} label="激辛"/>
        <FormControlLabel value="tsuke" control={<Radio size="small"/>} label="つけ麺"/>
        <FormControlLabel value="maze" control={<Radio size="small"/>} label="まぜそば・汁なし・油そば"/>
      </RadioGroup>
    </FormControl>
  )
}

export default GenrePick
// genre_dict = {"家系":"iekei",
//               "次郎系":"jiro",
//               "激辛":"kara",
//               "つけ麺":"tsuke",
//               "まぜそば":"maze"}