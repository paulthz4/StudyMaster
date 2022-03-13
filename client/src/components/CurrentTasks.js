import React, { useState} from 'react';
import Axios from 'axios';
// import Button from './Button';

export function CurrentTasks(props) {
    const [tasks, setTasks] = useState({task1:"", task2:"", task3:""});
    
    const submitTask = () =>{
      Axios.post("http://localhost:3001/api/insert", {
        taskName1: tasks.task1, 
        taskName2: tasks.task2, 
        taskName3: tasks.task3
        }).then(props._callBack());
        
      
    }
    
    const handleChange = (e) =>{
      setTasks(prevTasks =>({...prevTasks, [e.target.name]:e.target.value}));
      console.log(tasks.task1,tasks.task2,tasks.task3); 
    }
    return (
    <div className="task-container">
            <ul>
                <li key="task1"><div className="task-box">
                    <p ><input type="checkbox" /><input className="task-input" name='task1' onChange={(e)=>handleChange(e)} type="text" placeholder="Task name" /></p>
                  </div>
                </li>
                <li key="task2"><div className="task-box">
                    <p ><input type="checkbox" /><input className="task-input" name='task2' onChange={(e)=>handleChange(e)} type="text" placeholder="Task Name" /></p>
                  </div>
                </li>
                <li key="task3"><div className="task-box">
                    <p ><input type="checkbox" /><input className="task-input" name='task3'onChange={(e)=>handleChange(e)} type="text" placeholder="Task name" /></p>
                  </div>
                </li>
                <li><button style={{fontSize:"small", width:"auto", height:"auto"}} onClick={submitTask}>Submit</button></li>
            </ul>
    </div>
  );
}
export default CurrentTasks;