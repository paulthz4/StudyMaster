import { useContext,useEffect } from 'react';
import  {CountdownCircleTimer} from 'react-countdown-circle-timer';
import { SettingsContext } from '../context/SettingsContext';

const CountdownAnimation = ({key, timer, animate, children})=> {
    const { stopStudying } = useContext(SettingsContext); //useContext() method allows you to access contents of Setting.js
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `Timer Finished`;
    });
    var blinkTab = function (message) {
        var oldTitle = document.title,                                                           /* save original title */
            timeoutId,
            blink = function () { document.title = document.title == message ? ' ' : message; },  /* function to BLINK browser tab */
            clear = function () {                                                                 /* function to set title back to original */
                clearInterval(timeoutId);
                document.title = oldTitle;
                window.onmousemove = null;
                timeoutId = null;
            };

        if (!timeoutId) {
            timeoutId = setInterval(blink, 1000);
            window.onmousemove = clear;                                                            /* stop changing title on moving the mouse */
        }
    };
  return(
    <CountdownCircleTimer style={{fontSize: "2.5rem"}}
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
          alert("timer is done");
          blinkTab("stop studying");
      }}
    >
        {children}
    </CountdownCircleTimer>
  )
}
export default CountdownAnimation;