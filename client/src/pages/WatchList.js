import {React, useState, useEffect } from 'react'
import AnimeCard from '../components/AnimeCard'
import axios from 'axios'




const WatchList = () => {
  const [animes, setAnimes] = useState([])

  const getAnimes = async () => {
    let res = await axios.get(`http://localhost:3001/api/animes/allAnime`)
    console.log('data',res.data);
    setAnimes(res.data)
  }

  useEffect(()=>{
    getAnimes()
  }, [])




  return (
    <div className="animes">
      <h2>Watch List</h2>
    <section className="animecard">
      {animes.map((anime) => (
        <AnimeCard key={anime.id} {...anime} />
      ))}
    </section>
  </div>
  
  
  )
}



export default WatchList