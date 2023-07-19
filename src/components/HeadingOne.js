import React from 'react'

function HeadingOne({text, headclass}) {
  return (
    <h1 className={headclass}>{text}</h1>
  )
}

export default HeadingOne