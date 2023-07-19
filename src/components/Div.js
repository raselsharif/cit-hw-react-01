import React from 'react'

function Div({children, divclass, divid}) {
  return (
    <div className={divclass} id={divid}>{children}</div>
  )
}

export default Div