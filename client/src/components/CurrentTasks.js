import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from './Button';

export function CurrentTasks() {
    const [task1, setTask1] = useState("");
    const [task2,setTask2] = useState("");
    const [task3, setTask3] =  useState("");
    
    const submitTask = () =>{
      console.log(task1+", "+task2+", "+task3)
      Axios.post("http://localhost:3001/api/insert", {
        taskName1: task1, 
        taskName2: task2, 
        taskName3: task3
        })
      .then(()=>{
        alert("sucessful insert");
        
      });
    }
    
    const handleChange = (e) =>{
      switch(e.target.name){
        case 'task1':
          setTask1(e.target.value);
          break;
        case 'task2':
          setTask2(e.target.value);
          break;
        case 'task3':
          setTask3(e.target.value);
          break;
        default: break;
      }  
    }
    return (
    <div className="task-container">
            <ul>
                <li><div className="task-box">
                    <p ><input type="checkbox" /><input className="task-input" name='task1' onChange={(e)=>handleChange(e)} type="text" placeholder="Task name" /></p>
                  </div>
                </li>
                <li><div className="task-box">
                    <p ><input type="checkbox" /><input className="task-input" name='task2' onChange={(e)=>handleChange(e)} type="text" placeholder="Task Name" /></p>
                  </div>
                </li>
                
                <li><div className="task-box">
                    <p ><input type="checkbox" /><input className="task-input" name='task3'onChange={(e)=>handleChange(e)} type="text" placeholder="Task name" /></p>
                  </div>
                </li>
                <li><button style={{fontSize:"small", width:"auto", height:"auto"}} onClick={submitTask}>Submit</button></li>
            </ul>
    </div>
  );
}
export default CurrentTasks;