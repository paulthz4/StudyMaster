//import React from 'react';

const Button = ({title, activeClass, _callBack}) => {
  return (
    <button style={{position:"relative", zIndex:"2"}}  onClick={_callBack}>{title}</button>
  );
}
export default Button;