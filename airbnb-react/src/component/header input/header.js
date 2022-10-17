import React from 'react'
import dataBase from "../dataBase.json"
import HeaderComponent1 from "./headerComponent1"
import HeaderSlider from "./headerSlider"
dataBase.map((a)=>{ return console.log(a.headerSvgInput)})

function header() {
  return (
    <header>
         <div className="header-main-container">
            <div className="header-main-container-child">
              <div className="header-input-container">
                <HeaderComponent1 />
             
              </div>
                
            </div>
         </div>
         <HeaderSlider />
    </header>
  )
}

export default header