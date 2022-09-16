import React from 'react'
import { useState } from 'react'

export default function ContactCard(props) {
    const [showAge, SetShowAge] = useState(false);

      return (
    <div className='contactcard'>

        <div className="contactcard-img">
        <img src={props.image} alt="" />
        </div>

        <div className='user-details'>

        <h4>Name: {props.name}</h4>
        <p>Email: {props.email}</p>

        <button onClick={() => SetShowAge(!showAge)}>Show Age</button>

        {showAge ? <p>Age: {props.age}</p> : null}
        
        </div>
        </div>
  )
}
