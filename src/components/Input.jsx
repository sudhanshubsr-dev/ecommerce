import React from 'react'

export default function Input({hanldeRadioChange, value, title, name, color}) {
  return (
    <label className="sidebar-label-container">
  <input onChange={hanldeRadioChange} type='radio' value={value} name={name} />
  <span className="checkmark" style={{backgoundColor: color}}></span>{title}
</label>
  )
}
