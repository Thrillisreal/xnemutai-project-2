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



  console.log(animeMade);
  return (
  <div>
    <form onSubmit={setAnime}>
      <input
        type="text"
        name="img"
        value={animeMade.img}
        placeholder="Type Img Url"
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        value={animeMade.name}
        placeholder="Type Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={animeMade.description}
        placeholder="Type Description"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form> 
   </div>
  )
}

