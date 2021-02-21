import {useState, createContext} from 'react';

//this component contains the whole application
export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0); //the timer, runs the entire app
  const [executing,setExecuting] = useState({}); //object that comes from the setting page, carrier of all the settings timer
  const [startAnimate, setAnimate] = useState(false); //animation of the timer

  //recieves stater, update current object state to whatever it is and set timer value
  function setCurrenTimer(active_state){
    updateExecute({
      ...executing,
      active: active_state
    });
    setTimerTime(executing);
  }

  function startStudying(){
    setAnimate(true);
  }
  function pauseStudying(){
    setAnimate(false);
  }
  function stopStudying(){
    setAnimate(false);
  }
  const SettingButton = () =>{
    setExecuting({});
      setPomodoro(0)
  }
  const updateExecute = (updatedSettings)=>{
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  }
  const setTimerTime = (evaluate) =>{
    switch(evaluate.active){
      case 'work':
        setPomodoro(evaluate.work);
        break;
      case 'short':
        setPomodoro(evaluate.short);
        break;
      case 'long':
        setPomodoro(evaluate.long);
        break;
      default:
        setPomodoro(0);
        break;
    }
  }
  const children = ({ remainingTime}) =>{
    const minutes = Math.floor(remainingTime/60);
    const seconds = remainingTime%60;
    return `${minutes}:${seconds}`;
  }
  return(
    <SettingsContext.Provider 
    value={{
      stopStudying,
      updateExecute,
      pomodoro, 
      executing, 
      startAnimate, 
      startStudying,
      pauseStudying,
      SettingButton,
      setCurrenTimer,
      updateExecute,
      children }}>
      {props.children}
    </SettingsContext.Provider>
  );
}
export default SettingsContextProvider;