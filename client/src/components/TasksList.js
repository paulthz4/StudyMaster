import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function CurrentTasks(props){
  const deleteTask=()=>{
    Axios.delete("http://localhost3001/api/delete",{
      // THE TASK BEING DELETED
    });
  }
  return(
    <ul id="task-list">
              {props.tasksList.map((task, index) =>{
                  return <li key={index}><span>Task Name:</span> {task.taskName} <button className="task-list-button"  onClick={deleteTask}>Delete</button></li>
                })
              }
              <li><button style={{fontSize:"small", width:"auto", height:"auto"}} onClick={props.onDelete}>Delete All</button></li>
            </ul>
  );
}
export default CurrentTasks;