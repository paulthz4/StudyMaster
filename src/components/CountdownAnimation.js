import { useContext } from 'react';
import  {CountdownCircleTimer} from 'react-countdown-circle-timer';
import { SettingsContext } from '../context/SettingsContext';

const CountdownAnimation = ({key, timer, animate, children})=> {
  const {stopStudying} = useContext(SettingsContext); //useContext() method allows you to access contents of Setting.js
  return(
    <CountdownCircleTimer
      key = {key}
      isPlaying={animate}
      duration={timer*60}
      colors={[
        ['#FE6F6B', 0.33],
        ['#FE6F6B', 0.33],
        ['#FE6F6B', 0.33]
      ]}
      strokeWidth={30}
      size={320}
      trailColor='#151932'
      onComplete={ () => {
        stopStudying();
      }}
    >
        {children}
    </CountdownCircleTimer>
  )
}
export default CountdownAnimation;