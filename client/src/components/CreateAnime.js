import {React, useState} from 'react'
import axios from 'axios'

export default function CreateAnime(props) {
  const [animeMade, makeAnime] = useState({
    img:'',
    name:'',
    description:''
    })

  const setAnime = async (event) => {
    console.log(animeMade);
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/api/animes/newAnime', animeMade)
    makeAnime({
      img:'',
      name:'',
      description:''
      })
      props.history.push('/watchlist')
  }

  const handleChange = (event) =>{
    makeAnime({...animeMade,[event.target.name]:event.target.value})
  }

  return (
    <div className="animeback">
      <div className="animetitle">
      <h2>Welcome!!!!</h2>
    </div>
    <div className="animetitle">
      <h2>Type Your Favorite Anime Show</h2>
    </div>
  <div className='form'>
    <form onSubmit={setAnime} >
    <div>
   <h3>Img Url:</h3>
   </div>
      <input className="animeinput"
        type="text"
        name="img"
        value={animeMade.img}
        placeholder="Type Img Url"
        onChange={handleChange}
      />
      <div>
   <h3>Name:</h3>
   </div>
      <input className="animeinput"
        type="text"
        name="name"
        value={animeMade.name}
        placeholder="Type Name"
        onChange={handleChange}
      />
      <div>
   <h3>Description:</h3>
   </div>
      <input className="animeinput"
        type="text"
        name="description"
        value={animeMade.description}
        placeholder="Type Description"
        onChange={handleChange}
      />
      <button className='button'>CREATE</button>
    </form> 
   </div>
   </div>
  )
}

