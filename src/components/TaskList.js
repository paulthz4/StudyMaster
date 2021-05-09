import React from 'react';

export function TaskList(){
   const handleClick = e => {
    // alert("hello");
    const element = e.target;
    element.element.classList.toggle("crossed-line");
  };
  return (
    <div className="task-container">
      <div className="task-box">
        <p style={{width:"14.1em"}}><input style={{marginRight:"15px"}}  type="checkbox"/><input className="task-input" type="text" placeholder="Task name"/><span style={{ paddingLeft:"9px"}}>25</span></p>
      </div>
      <div className="task-box">
        <p style={{width:"14.1em"}}><input style={{marginRight:"15px"}} type="checkbox"/><input className="task-input" type="text" placeholder="Task name"/><span style={{ paddingLeft:"9px"}}>25</span></p>
      </div>
      <div className="task-box">
        <p style={{width:"14.1em"}}><input style={{marginRight:"15px"}} type="checkbox"/><input className="task-input" type="text" placeholder="Task name"/><span style={{ paddingLeft:"9px"}}>25</span></p>
      </div>
      <div>
        <button >Add Task</button>
      </div>
      <div class="">
        <button style={{width:"fit-content"}}>Remove Finished Tasks</button>
      </div>
    </div>
  );
}
export default TaskList;