import React from 'react'

const List = () => {
    const arr=['html','css','js','c']
    const li= arr.map((el,index)=>(<li key={index}>{el}</li>)) 
        
  return (
    <div>
        <ul>
            {li}
        </ul>
    </div>
  )
}

export default List