import React from 'react'

function InputComp({className,placeholder,value}) {
  return (
    <input type="text" className={className} placeholder={placeholder} value={value}/>
 )
}

export default InputComp