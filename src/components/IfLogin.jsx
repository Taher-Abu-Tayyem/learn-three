import {React,useState} from 'react';
import   Welcome   from './Welcome';
import   Guest   from './Guest';
const IfLogin= ()=> {
    const [isLoggedIn,setIsLoggedIn] = useState(true);

    
return (
    <div>
        
        {isLoggedIn?<Welcome/>:<Guest/>}
        <button onClick={()=>setIsLoggedIn(false )}>onClick</button>       
    </div>
  );
}

export default IfLogin
