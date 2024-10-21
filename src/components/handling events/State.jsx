import {useState} from 'react'

function State() {
   
    let [p,setP]=useState({pid:1,pname:"kanth"});
    function ch()
    {
       
       setP({...p,pid:20});
    }
  return (
    <div>
      
        <h1>{p.pid}</h1>
        <h1>{p.pname}</h1>
    <button onClick={ch}>click</button>
    </div>
  )
}

export default State