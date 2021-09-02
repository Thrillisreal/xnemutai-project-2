import React from 'react'
export default function CreateAnime(props) {
  
  
  return (
  <form>
    <form>
      <input
        type="text"
        name="img-url"
        value={props.value}
        placeholder="Search Games"
        onChange={props.onChange}
      />
      <input
        type="text"
        name="name"
        value={props.value}
        placeholder="Search Games"
        onChange={props.onChange}
      />
      <input
        type="text"
        name="description"
        value={props.value}
        placeholder="Search Games"
        onChange={props.onChange}
      />
      <button type="submit">Submit</button>
    </form>
  </form>
  )
}

