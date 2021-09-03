import React from 'react'
import axios from 'axios'



export default function AnimeCard(props) {

  const deleteAnimeCard = (props)=>{
  
   axios.delete(`http://localhost:3001/api/animes/${props}`)
   
   .then(res=>{
     console.log(res.data);
    
    })
    window.location.reload()
  }

  return (

  <div className='anime-container'>
 <div className='animecard'>
 <div>
    <img src={props.img} alt='' />
</div>
<div className='animeinfo'>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button className='watchlistbtn' onClick={()=>deleteAnimeCard(props._id)}>Delete</button>
</div>
</div>
{/* <footer className="animefooter">@Micah</footer> */}
</div>
  )
}