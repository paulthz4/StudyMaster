import React, { useState } from 'react';

export function TaskList() {
    let i = <div className="task-box">
        <p ><input type="checkbox" /><input className="task-input" type="text" placeholder="Task name" /></p>
    </div>;
    const [tasks, setTasks] = useState([i,i]);
    
    return (
    <div className="task-container">
            <ul>
                {tasks.map((item, index) => <li id='i' key={index}>{item}</li>)}
                
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