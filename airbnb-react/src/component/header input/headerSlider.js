import React from 'react'
import dataBase from "../dataBase.json"
import "./headerComponentStyle.css"
var classNames = require('classnames')

function headerSlider() {
  let sliderSrc
  let sliderName
  dataBase.map((a)=>{
    if(a.name ==="headerScrollBar"){
      sliderSrc = a.path
      sliderName = a.slideName
    }
    return sliderSrc
  })
  console.log(sliderSrc)
  return (
    <div className="header-slider-container">
      <div className="header-slider-container-child" classNames >
        {
    sliderSrc.map((a,i)=>{
     return  <button onClick ={(e)=>{

     }}>
        <div className="slider-component-container">
          <span>
            <img src ={a} alt ="slider"/>
            <div className="header-scroll-bar-text">
              <span className="header-scrollBar-span">
                {sliderName[i]}
              </span>
            </div>
          </span>
        </div>
       </button>
    })
        }
      </div>
    </div>
  )
}

export default headerSlider