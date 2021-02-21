import React, { useContext, useState } from 'react';
import { SettingContext } from '../context/SettingsContext';
import Button from './Button';

const SetTimer = () => {
  const {updateExecute} = useContext(SettingContext); 
  const [newTimer, setNewTimer] = useState({
    study: 0.3,
    short: 0.2,
    long: 1, //1 minute
    active: 'study' //default is study
  })
  const handleSubmit = (e) =>{
    e.preventDefault();
    updateExecute(newTimer)
  }
  const handleChange = input =>{
    const {name, value} = input.target
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
    console.log(newTimer);
  }
  return(
    <div className='form-container'>
      <form noValidate>
        <div className='input-wrapper'>
          <input className='input' name='study' onChange={handleChange} value={newTimer.study}/>
          <input className='input' name='shortBreak' onChange={handleChange} value={newTimer.short}/>
          <input className='input' name='longBreak' onChange={handleChange} value={newTimer.long}/>
        </div>
        <Button title="Set time" _callBack={handleSubmit} />
      </form>
    </div>
  );
}
export default SetTimer;
