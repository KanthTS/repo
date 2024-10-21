import {useState,useEffect} from 'react'

function Side() {
let [p,setP]=useState([]);
  useEffect(
    ()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(pl=>setP(pl))
        .catch(er=>console.log("err"))
    },[]
  );
  return (
    <div>
      {
        p.map((m,k)=>
            
     <h2 key={k}>{m.id}
     {m.title}</h2>
    
        )
      }
    </div>
  )
}

export default Side