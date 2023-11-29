import React from 'react'
import Buttons from '../components/Buttons.jsx'
import './recommended.css'


export default function Recommended({handleButtonClick}) {
  return (
    
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommneded-flex">
          <Buttons onClickHandler={handleButtonClick} value="" title="All" />
          <Buttons onClickHandler={handleButtonClick} value="Nike" title="Nike"/>
          <Buttons onClickHandler={handleButtonClick} value="Adidas" title="Adidas"/>
          <Buttons onClickHandler={handleButtonClick} value="Puma" title="Puma"/>
          <Buttons onClickHandler={handleButtonClick} value="Vans" title="Vans"/>
        </div>
      </div>
    </>
  )
}
