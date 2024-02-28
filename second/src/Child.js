import React from 'react'
export default function Child(props) {
  return (
    <div className='App'>
        <div>
      <p>{props.aa}</p>
      <p>{props.image1name}</p>
      </div>
      <div>
      <p>{props.cc}</p>
      <p>{props.image2name}</p>
      </div>
      
    </div>
  )
}
