import React from 'react'
import './ShowTask.css';

export default function ShowTask({tasklist,setTasklist,task,setTask}) {
    const handleDelete = (id)=>{
        //anni list lo nundi oka  danni delete cheyali.
        //we just leave the equalid
        const updatedList =  tasklist.filter(todo=>todo.id!==id);
        setTasklist(updatedList);
    }

    const handleEdit = (id)=>{
         //getbyid = object received
        const edit= tasklist.find(todo=>todo.id==id);
        setTasklist(edit);
    }
    return (
        <div>
            <section className='showtask'>
                <div className='head'>
                    <div>
                        <span className='title'>Todo</span>
                        <span className='count'>{tasklist.length}</span>
                    </div>
                    <button className='clearall'>clear All</button><br></br>
                    <div>
                    <ul>
                        {tasklist.map(
                            (todo) => (
                                <li>
                                    <p>
                                        <span className='id'>{`ID: ${todo.id}`}</span>
                                        <span className='id'>{`ID: ${todo.name}`}</span>
                                        <span className='id'>{`ID: ${todo.time}`}</span>
                                    </p>
                                    <i className='bi bi-pencil-square' onClick={()=>handleEdit(todo.id)}></i>
                                    <i className='bi bi-trash' onClick={()=>handleDelete(todo.id)}> </i>
                                </li>
                            )
                        )}
                    </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
