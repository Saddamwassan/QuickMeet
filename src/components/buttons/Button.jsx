import React from 'react'
import './button.css';

function Button({type,className,onClick}) {
  return (
    <button className={className} onClick = {onClick}>
        {type}
    </button>
  )
}

export default Button