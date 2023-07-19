import React from 'react'

function Myp({classp, idp,ptext}) {
  return (
    <p className={classp} id={idp}>{ptext}</p>
  )
}

export default Myp