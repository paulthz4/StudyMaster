import React,{useEffect, useContext} from 'react';
import SetTimer from './components/SetTimer'
import { SettingsContext } from './context/SettingsContext';
import Button from './components/Button';
import SettingButton from './context/SettingsContext';
import Cloud from './components/Cloud';
import CountdownAnimation from './components/CountdownAnimation'


function App() {
  const{pomodoro, executing, setCurrentTimer, SettingButton, children, startAnimate, startStudying, pauseStudying, updateExecute} = useContext(SettingsContext);
  useEffect(() => {updateExecute(executing)},[executing, startAnimate, updateExecute]);
  
  return (
    <div className="container">
      <h1 style={{position:"relative", zIndex:"2"}}>Pomodoro</h1>
      <h2 style={{position:"relative", zIndex:"2"}}>Let's be productive </h2>
      
        {pomodoro !== 0 ?
            <>
            <ul className='labels' style={{position:"relative", zIndex:"2"}}>
              <li>
                <Button title='Study' activeClass={executing.active ==='work' ? 'active-label' : undefined}
                _callBack= {() => setCurrentTimer('work')}
                />
              </li>
              <li>
                <Button title='Short Break' activeClass={executing.active ==='short' ? 'active-label': undefined}
                _callBack= {() => setCurrentTimer('short')}
                />
              </li>
              <li>
                <Button title='Long-Break' activeClass={executing.active ==='long' ? 'active-label': undefined}
                _callBack= {() => setCurrentTimer('long')}
                />
              </li>
            </ul> 
            
            <Button title='Settings' _callBack={SettingButton}/>
            <div  className='timer-container'>
              <div className='timer-wrapper'>
                <CountdownAnimation
                  key={pomodoro}
                  timer={pomodoro}
                  animate={startAnimate}
                >
                  {children}
                </CountdownAnimation>
              </div>
              </div>
              
              <div className='button-wrapper'>
                <Button title='Start' className="timer-btns" activeClass={!startAnimate? 'active' : undefined} _callBack={startStudying}/>
                <Button title='Pause' className="timer-btns" activeClass={startAnimate? 'active' : undefined} _callBack={pauseStudying}/>
                {/* <button className="timer-btns" activeClass={!startAnimate? 'active' : undefined} _callBack={startStudying}>Start</button> */}
              </div>
              
            </> : <SetTimer/> }
        
    </div>
  );
}

export default App;
