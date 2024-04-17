import React from 'react'
import './Notesfour.css'
import Sidenav from '../../component/Sidenav/Sidenav'
import Uppernav from '../../component/Uppernav/Uppernav'
function Notesfour() {
  return (
    <>
       <Sidenav/>
       {/* <Uppernav/> */}
       <div className="Notes-four-main">
         <div className="Notes-four-main-left"></div>   
         <div className="Notes-four-main-right"></div>
       </div>
    </>
  )
}

export default Notesfour
