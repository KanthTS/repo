import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    let[err,setErr]=useState(null);
    const nav=useNavigate();
    let[f,setF]=useState(
        {
            name:'',
            email:'',
            password:'',
            dob:''
        }
    );
    const handleChange= (e)=>{
        const{name,value}=e.target;
        setF({...f,[name]:value});
    }
    const handleSubmit =(e)=>{
       e.preventDefault();
        console.log(f)
        fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(f)
        })
        .then((res)=>{
            if(res.status===201)
            {
                nav('/login');
            }
            else{
                setErr({message:res.message})
            }
        })
        .catch(err=>setErr(err))
    }
  return (
   
    <form onSubmit={handleSubmit} className="text-center p-5 bg-danger m-5" style={{minHeight:'80vh'}}>
        <h3 className="text-white"> Registration Form</h3>
        {
            err!=null && <p className="lead text-success text-center">{err.message}</p>
        }
     <div className="p-3 form-label">
        <label>Name:
        <input type="text" name="name" value={f.name} onChange={handleChange} />
        </label>
     </div>
     <div className="p-3"><label>Email:
        <input type="text" name="email" value={f.email} onChange={handleChange} />
        </label>
        </div>
        <div className="p-3 form-label">
        <label>Password:
        <input type="text" name="password" value={f.password} onChange={handleChange} />
        </label>
        </div>
        <div className="p-3 form-label">
        <label>dob:
        <input type="date" name="dob" value={f.dob} onChange={handleChange} />
        </label>
        </div>
        <div >
            <button type="submit" className="btn btn-success ">Register</button>
        </div>
    </form>
  )
}

export default Register