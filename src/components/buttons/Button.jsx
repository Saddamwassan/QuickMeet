import React from 'react'
import './button.css';

function Button({name,className,onClick,type}) {
  return (
    <button className={className} onClick = {onClick} type={type}>
        {name}
    </button>
  )
}

export default Button