import React from 'react'
import  "./Sidenav.css"
import { IoHome } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { TbDeviceIpadHorizontalQuestion } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Logo from "../../Images/log.png"

function Sidenav() {
  return (
    <>
      
       <div className="sidemainnav">
     <div className="nav-button-log">
      <img src={Logo} alt="" />
     </div>
         <div className="insidemain">
          <div className="navbutton1">
           <Link to={'/'} > <li><IoHome size={35}/></li></Link>
          </div>
          <div className="navbutton2">

              <Link to={'/notes'}><li><GrNotes  size={35}/></li></Link>
            
          </div>
          <div className="navbutton3">  <Link to={'/question-one'} > <li><TbDeviceIpadHorizontalQuestion  size={35} /> </li></Link> </div>
          <div className="navbutton4">
            <a href="">
              <li><IoIosContact size={40} /></li>
            </a>
          </div>
          <div className="navbutton4">
            <a href="">
              <li></li>
            </a>
          </div>

         </div>

     </div>

    </>
  )
}

export default Sidenav
