import React from 'react'
import dataBase from "../dataBase.json"
import "./headerComponentStyle.css"
function headerComponent1() {
    let object
    dataBase.map((a)=>{
                 if(a.name==="header"){
                    object = a
                 }
                 return object
    })
   return (<div className="input-header-container">
      <div className ="header-search-svg"> <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" display = "block" height = "16px" width ="16px" fill= "currentcolor"><path d={object.headerSvgInput}></path></svg></div>
      <div className = "header-text-container"> 
      <div className = "header-text-flexbox-one"><span> {object.text}</span> </div>
      <div className="header-test-flexbox-two">{
        object.headerText.map((a)=>{
          return  <div>
                <span>{a}</span>
            </div>
        })}
      </div>
      </div>
      <div className="header-input-last-svg-container">
        <div className="header-input-last-svg-container-child">
            <div className="header-svg-container">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" display = "block" height="16px" width="16px"fill="#222222" aria-hidden="true" role="presentation" focusable="false"><path d={object.headerSvgLast}></path></svg>
            </div>
        </div>
      </div>
         </div>
  

   )
}

export default headerComponent1


