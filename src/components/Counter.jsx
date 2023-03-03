import {React,useState,useEffect} from 'react'

const Counter = () => {
const [count,setCount]=useState(0);

useEffect(()=>{
    document.title=`times ${count} `;
})

  return (
   <> 
    <div>{count}</div>
    <button onClick={() => {setCount(count+1)}}>+</button></>
  )
}

export default Counter