import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function CurrentTasks(props){
   const [tasksList, setTasksList] = useState([]);
  
  const deleteAll = () =>{
      Axios.delete("http://localhost:3001/api/delete").then(() => {
        setTasksList(values => [0]);
      })
    
  }
  //fetches data on first render
  useEffect(() =>{
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setTasksList(response.data);
    })
  }, []);
  
  //fetches data when new data is submited by props.tasksList
  useEffect(() =>{
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setTasksList(response.data);
    })
  }, [props.tasksList]);
  return(
    <ul id="task-list">
              {tasksList.map((task) =>{
                  return <li><span>Task Name:</span> {task.taskName} <span>Completed:</span> {task.completed} <button style={{fontSize:"small", width:"auto", height:"auto"}}>Delete</button></li>
                })
              }
              <li><button style={{fontSize:"small", width:"auto", height:"auto"}} onClick={deleteAll}>Delete All</button></li>
            </ul>
  );
}
export default CurrentTasks;