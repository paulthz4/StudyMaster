import React, { useContext, useState } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const SetTimer = () => {
   
  const [newTimer, setNewTimer] = useState({
    study: 25,//25 minutes
    short: 5,//5 minutes
    long: 10, //10 minutes
    active: 'study' //default is study
  })
  const {updateExecute} = useContext(SettingsContext);

  
  const handleChange = input =>{
    const {name, value} = input.target;
     //overwrite the default value to the input value
    switch(name){
      case 'study':
        setNewTimer({
          ...newTimer,
          study: parseInt(value)
        })
        break;
      case 'shortBreak':
        setNewTimer({
          ...newTimer,
          short: parseInt(value)
        })
        break;
      case 'longBreak':
          setNewTimer({
            ...newTimer,
            long: parseInt(value)
          })
          break;
      default: break;
    }
    //console.log(newTimer); 
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    updateExecute(newTimer);
  }
  return(
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input className="input" type="number" name="study" onChange={handleChange} value={newTimer.study}/>
          <input className="input" type="number" name="shortBreak" onChange={handleChange} value={newTimer.short}/>
          <input className="input" type="number" name="longBreak" onChange={handleChange} value={newTimer.long}/>
        </div>
        <button type="submit"> Set Timer</button> 
      </form>
    </div>
  );
}
export default SetTimer;
