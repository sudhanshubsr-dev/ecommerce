import React from 'react'

export default function Buttons({onClickHandler, value, title}) {
  return (
    <>
        <button onClick={onClickHandler} className="btns" value={value}>{title}</button>
    </>
  )
}
