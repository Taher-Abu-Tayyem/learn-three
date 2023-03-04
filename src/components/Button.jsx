import {React,useState} from 'react'

 
function Button  ( props) {
    let [counter,setCounter]=useState(0);
    return (
      <div> 
        <button onClick={() => {setCounter(counter+1)}}>+</button>
         {counter}
      </div>
      
    )
  }
  
  export default Button;