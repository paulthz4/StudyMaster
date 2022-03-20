import React, { useState} from 'react';
import Axios from 'axios';
// import Button from './Button';

export function CurrentTasks(props) {
    const [tasks, setTasks] = useState({
      task1:{
        name:"",
        completed: false
      }, 
      task2:{
        name:"",
        completed: false
      }, 
      task3:{
        name:"",
        completed: false
      }      
    });
    
    const submitTasks = () =>{
      Axios.post("http://localhost:3001/api/insert", {
        firstTask: tasks.task1, 
        secondTask: tasks.task2, 
        thirdTask: tasks.task3
        }).then(props._callBack());
        
      
    }
    // input text event handler
    const handleChange = (e) =>{
      setTasks(prevTasks =>({...prevTasks, 
        [e.target.name]:{
        // ...prevTasks.task1.completed,
          name: e.target.value,
          }}
      ));
      // console.log(tasks); 
    }
    
    //checkbox event handler
    const onClick=(e)=>{
      setTasks(prevTasks=> ({...prevTasks, 
        [e.target.name]:{
          // name: e.target.sibling.value,
          completed: e.target.checked
        }
      }));
      console.log(tasks);
    }
    return (
    <div className="task-container">
            <ul>
                <li key="task1"><div className="task-box">
                    <p ><input name='task1' type="checkbox" /><input className="task-input" name='task1' onChange={(e)=>handleChange(e)} type="text" placeholder="Task name" /></p>
                  </div>
                </li>
                <li key="task2"><div className="task-box">
                    <p ><input name='task2' type="checkbox"  /><input className="task-input" name='task2' onChange={(e)=>handleChange(e)} type="text" placeholder="Task Name" /></p>
                  </div>
                </li>
                <li key="task3"><div className="task-box">
                    <p ><input name='task3' type="checkbox" /><input className="task-input" name='task3'onChange={(e)=>handleChange(e)} type="text" placeholder="Task name" /></p>
                  </div>
                </li>
                <li><button style={{fontSize:"small", width:"auto", height:"auto"}} onClick={submitTasks}>Submit</button></li>
            </ul>
    </div>
  );
}
export default CurrentTasks;