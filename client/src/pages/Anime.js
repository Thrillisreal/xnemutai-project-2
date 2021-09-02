import {React, useState } from 'react'
import axios from 'axios'
import CreateAnime from '../components/CreateAnime'

export default function Anime() {
  const [anime, makeAnime] = useState([])

  const setAnime = async () => {
    let res = await axios.post(`http://localhost:3001/api/animes/newAnime{${anime}}`)
    anime(res.data.results)
  }

  const handleChange = (event) => {
    event.preventDefault()
    makeAnime(event.target.value)
  }
  
  
  
  
  
  
  return (
  <div>
  <CreateAnime onChange={handleChange} onSubmit={setAnime}/>

  </div>
  )
}
