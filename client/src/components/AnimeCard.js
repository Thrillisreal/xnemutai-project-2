import React from 'react'

export default function AnimeCard(props) {
  return (
 <div>
 <div>
    <img src={props.img} alt='' />
</div>
<div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
</div>
</div>
  )
}