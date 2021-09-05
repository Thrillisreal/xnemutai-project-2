import axios from 'axios'
import {React, useState} from 'react'

export default function UserName(props) {

  const [username, makeUsername] = useState({
    userName:''
    })

  const newUser = async (e) => {
    e.preventDefault()
      const res = await axios.post(
        `http://localhost:3001/api/users/newUser`, username)
      makeUsername({
        userName:'',
        })
        props.history.push('/anime')
  }

  const handleChange = (event) =>{
    makeUsername({...username,[event.target.name]:event.target.value})
  }

return(
  <div className="userContainer">
    <div>
      <div>
    <nav className="logo">
      <ol>Xnemutai</ol>
    </nav>
    </div>
    <div className="usertitle">
      <h2>Who Are You?</h2>
      </div>
    <form onSubmit={newUser} className="userform">
      <h2>Create UserName:</h2>
    <input className='userinput'
        type="text"
        name="userName"
        value={username.userName}
        placeholder="Create Username"
        onChange={handleChange}
      />
    <button className='userButton'>Submit</button>
    </form>
    <footer className="animefooter">@Micah</footer>
    </div>
  </div>
)

}


