import React from 'react'

function Cancel({value,className,onClick}) {
  return (
    <button className={className} onClick = {onClick}>
        {value}
    </button>
  )
}

export default Cancel