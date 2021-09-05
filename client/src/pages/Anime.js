import { React } from 'react'
import CreateAnime from '../components/CreateAnime'
import '../App.css'

export default function Anime(props) {
  return (
  <div>
    <nav className="animelogo">
      <ol>Xnemutai</ol>
    </nav>
  <CreateAnime {...props}/>
  <footer className="watchfooter">@Micah</footer>
  </div>
  )
}
