//import React from 'react';

const Button = ({title, activeClass, _callBack}) => {
  return (
    <button className={activeClass} onClick={_callBack}>{title}</button>
  );
}
export default Button;