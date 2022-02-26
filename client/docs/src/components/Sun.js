import React,{useEffect, useContext} from 'react';
import anime from 'animejs';

function Sun(){
  const animationRef = React.useRef(null);
  React.useEffect(() => {
    animationRef.current = anime({
      targets: "#sun path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 2500,
      delay: function(el, i){
        return i*100;
      },
      direction: "alternate",
      loop: true,
      fill:"#FDDC2F",
    });
  },[]);
  React.useEffect(() => {
    animationRef.current = anime({
      targets: '#sun',
      points: [
        { value: [
          'M230 115C230 178.513 178.513 230 115 230C51.4873 230 0 178.513 0 115C0 51.4873 51.4873 0 115 0C178.513 0 230 51.4873 230 115Z',
          ]
        },
        { value: 'M130 65C130 100.899 100.899 130 65 130C29.1015 130 0 100.899 0 65C0 29.1015 29.1015 0 65 0C100.899 0 130 29.1015 130 65Z' },
      ],
      easing: 'easeOutQuad',
      duration: 2000,
      loop: true
    });
  },[]);
  

  return(
    
    <svg id="sun" width="230" height="230" viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M230 115C230 178.513 178.513 230 115 230C51.4873 230 0 178.513 0 115C0 51.4873 51.4873 0 115 0C178.513 0 230 51.4873 230 115Z" fill="#FDDC2F"/>
    </svg>

  
  );
}
export default Sun;