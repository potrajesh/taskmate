import React, { useState } from 'react'

export default function AddTask({tasklist,setTasklist,task,setTask}) {
    const [textboxvalue, setTextboxvalue] = useState("");
    const handleSubmit = (event)=>{
           event.preventDefault();
           if(task.id){
            const date = new Date();
             const updatedtaskList =  tasklist.map((todo)=>(
                todo.id===task.id ? {id:task.id,name:event.target.textboxvalue.value,
                    time:`${date.toLocaleTimeString()}`}:{id:todo.id,name:todo.name,time:todo.time}
             ))
             setTasklist(updatedtaskList);
           }
           else{
            const date = new Date();
            const newTask = {
             id:date.getTime(),
             name:event.target.textboxvalue.value,
             time: `${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`,
         };
            setTasklist([...tasklist,newTask]);
            event.target.textboxvalue.value="";
           }

    }
    return (
        <div>
            <section className='addTask'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="textboxvalue"  
                autoComplete="off" placeholder="add task" onChange={e=>setTask({...task,name:e.target.value})} ></input>
                <button type='submit'>{task.id ?"update":"Add"}</button>
            </form>
            </section>
        </div>
    )
}
