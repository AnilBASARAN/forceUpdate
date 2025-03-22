
//import { useState } from 'react'
import { useReducer } from 'react';
import './App.css'

/* const useForceUpdate=()=>{
  const [value,setValue] = useState(true);
  return ()=> setValue(!value);
} */

function App() {
//const forceUpdate = useForceUpdate();
const [,forceUpdate] = useReducer((x)=>x+1,0);
console.log("render");
  return (
   <div>
    App
    <button onClick={()=> forceUpdate() }>Force Update</button>
   </div>
  )
}

export default App
