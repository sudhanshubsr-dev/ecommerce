import React from 'react'
import './sidebar.css'
import Category from './Category/Category'
import Price from './Price/Price'

export default function Sidebar({handleRadioChange}) {
  
  return (
    <>  
        <section className="sidebar">
            <div className="logo-container">
                <h1>CartLogo</h1>
            </div>
            <Category handleRadioChange={handleRadioChange} />
            <Price handleRadioChange={handleRadioChange}/>
        </section>
    </>
  )
}
