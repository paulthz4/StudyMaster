import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function CurrentTasks(props){
  const deleteTask=(id)=>{
    Axios.delete(`http://localhost:3001/api/deleteTask/${id}`)
    .then(()=>{props._callBack()});
    
  }
  return(
  <> {props.tasksList.length > 0 &&
      <ul id="task-list">
                {props.tasksList.map((val, index) =>{
                    return <li key={val.idtasks} ><span>Task Name:</span> {val.taskName} <button className="task-list-button" id={val.idtasks} onClick={()=>props.delete(val.idtasks)}>Delete</button></li>
                  })
                }
                <li><button style={{fontSize:"small", width:"auto", height:"auto"}} onClick={props.onDelete}>Delete All</button></li>
              </ul>
      }
  </>            
  );
}
export default CurrentTasks;