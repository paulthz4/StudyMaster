import React, { useState} from 'react';
import Axios from 'axios';
// import Button from './Button';

export function CurrentTasks(props) {
    const [tasks, setTasks] = useState({
      task1:{
        name:""
      }, 
      task2:{
        name:""
      }, 
      task3:{
        name:""        
      }      
    });
    
    const submitTasks = () =>{
      Axios.post("http://localhost:3001/api/insert", {
        newTasks: tasks
        }).then(props._callBack());
    }
    // input text event handler
    const handleChange = (e) =>{
      setTasks(prevTasks =>({...prevTasks, 
        [e.target.name]:{
          name: e.target.value
        }}
      ));
      console.log(tasks); 
    }
    
    return (
    <div className="task-container">
            <ul>
                <li key="task1"><div className="task-box">
                    <p ><input className="task-input" name='task1' onChange={(e)=>handleChange(e)} type="text" placeholder="Task name" /></p>
                  </div>
                </li>
                <li key="task2"><div className="task-box">
                    <p ><input className="task-input" name='task2' onChange={(e)=>handleChange(e)} type="text" placeholder="Task Name" /></p>
                  </div>
                </li>
                <li key="task3"><div className="task-box">
                    <p ><input className="task-input" name='task3'onChange={(e)=>handleChange(e)} type="text" placeholder="Task name" /></p>
                  </div>
                </li>
                <li><button style={{fontSize:"small", width:"auto", height:"auto"}} onClick={submitTasks}>Submit</button></li>
            </ul>
    </div>
  );
}
export default CurrentTasks;