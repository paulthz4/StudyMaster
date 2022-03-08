import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function CurrentTasks(){
  const [tasksList, setTasksList] = useState([]);
  const deleteAll = () =>{
    
      Axios.post("http://localhost:3001/api/delete").then(() => {
        alert("succesfull delete")
      })
    
  }
  
  useEffect(() =>{
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setTasksList(response.data);
    })
  }, []);
  
  return(
    <ul id="task-list">
              { tasksList.map((task) =>{
                  return <li><span>Task {task.idtasks}:</span> {task.taskName} Completed: {task.completed}</li>
                })
              }
              <li><button style={{fontSize:"small", width:"auto", height:"auto"}} onClick={deleteAll}>Delete All</button></li>
            </ul>
  );
}
export default CurrentTasks;