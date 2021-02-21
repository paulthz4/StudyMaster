import React, { useContext } from 'react';
import  {CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingContext } from '../context/SettingsContext';

const Countdown = ({key = 1, timer = 20, animate = true, children})=> {
  const {stopStudying} = useContext(SettingContext); //useContext() method allows you to access contents of Setting.js
  return(
    <CountdownCircleTimer
      key = {key}
      isPlaying={animate}
      duration={timer*60}
      colors={[['#fe6f6b', 0.33]]}
      strokeWidth={6}
      size={220}
      trailColor='151932'
      onComplete={ () => {
        stopStudying();
      }}
    >
        {children}
    </CountdownCircleTimer>
  )
}
export default Countdown;