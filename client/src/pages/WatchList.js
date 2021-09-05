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
<div>
 <div>
  <nav className="logo">
  <ol>Xnemutai</ol>
  </nav>
</div>
<h2 className='watchlist'>Watch List:</h2>
  <section className="watchback">
      {animes.map((anime) => (
        <AnimeCard key={anime.id} {...anime} />
      ))}
  </section>

  <footer className="watchfooter">@Micah</footer>
</div>
  
  
  )
}



export default WatchList