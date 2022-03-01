import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from './Button';

export function TaskList() {
  //const [tasks, setTasks] = useState([]);
  
  let i = <div className="task-box">
      <p ><input type="checkbox" /><input className="task-input" type="text" placeholder="Task name" /></p>
    </div>;
    const [task, setTask] = useState("");
    const submitTask = () =>{
      Axios.post("http://localhost:3001/api/insert", {taskName: task}).then(()=>{
        alert("sucessful insert");
      });
    }
    return (
    <div className="task-container">
            <ul>
                {/* {task.map((item, index) => <li id='i' key={index}>{item}</li>)} */}
                <li><div className="task-box">
                    <p ><input type="checkbox" /><input className="task-input" type="text" placeholder="Task name" /></p>
                  </div>
                </li>
                
                <li><div className="task-box">
                    <p ><input type="checkbox" /><input className="task-input" type="text" placeholder="Task name" /></p>
                  </div>
                </li>
                
                <li><div className="task-box">
                    <p ><input type="checkbox" /><input className="task-input" type="text" placeholder="Task name" /></p>
                  </div>
                </li>
                <li><button onClick={submitTask}>Submit to database</button></li>
            </ul>
            
      {/*<div>
                <button onClick={addTask} className="small-btns" >Add Task</button>
      </div>
            <div class="">
                <button style={{ width: "fit-content" }} className="small-btns" onCLick={removeTasks} > Remove Finished Tasks</button>
      </div>*/}
    </div>
  );
}
export default TaskList;