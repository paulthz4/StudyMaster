import SetTimer from './components/SetTimer'
import { Children, useContext, useEffect } from 'react';
import { SettingsContext } from './context/SettingsContext';
import Button from './components/Button';
import SettingButton from './context/SettingsContext';
import CountdownAnimation from './components/CountdownAnimation'


function App() {
  const{pomodoro, executing, setCurrentTimer, SettingButton, children, startAnimate, startStudying, pauseStudying, updateExecute} = useContext(SettingsContext);
  useEffect(() => updateExecute(executing),[executing, startAnimate]);
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Let's be productive buddy :)</small>
        {pomodoro !== 0 ?
          <SetTimer/>:
            <>
            <ul className='labels'>
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
                  animate={startAnimate}>
                    {children}
                </CountdownAnimation>
              </div>
              <div className='button-wrapper'>
                <Button title='Start' activeClass={!startAnimate? 'active':undefined} _callBack={startStudying}/>
                <Button title='Pause' activeClass={startAnimate? 'active':undefined} _callBack={pauseStudying}/>
              </div>
            </div>
            </>
        }
    </div>
  );
}

export default App;
