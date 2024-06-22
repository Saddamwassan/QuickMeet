import React from 'react'

function Input({className,placeholder,value}) {
  return (
    <input type="text" className={className} placeholder={placeholder} value={value}/>
 )
}

export default Input