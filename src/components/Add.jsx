import {useState} from 'react'
import {useForm} from 'react-hook-form';

function Add() {
let [task,setTask]=useState([]);
let {register,handleSubmit}=useForm()
function addNewTask(taskObj)
{
   setTask([...task,taskObj.newTask]);
   
console.log(taskObj);
}

  return (
    <div>
   <h2>ADD TASK</h2>
   <form onSubmit={handleSubmit(addNewTask)}>
    <input type="text" {...register("newTask")} />
    <button >ADD</button>
   </form>
    </div>
  )
}

export default Add