import React from 'react'
import Sidenav from '../../../component/Sidenav/Sidenav'
import './Notestwo.css'
import { Link } from "react-router-dom";
import Sadhu from "../../../Images/Sadhu.jpg"
function Notestwo() {
  return (
    <>
      <div className="notes-two-four-main">
        <Sidenav />
        <div className="notes-one-four-main-child-two">

          <div className="second-main">

            <div className="second-main-part">
              <div className="second-main-part-left">
                <div className="second-text"> <h1>Notes</h1>  </div>
                <div className="notesheader-semester"><h1>Select Your Semester</h1></div>
                <div className="second-semester-detail">
                  <div className="second-semester-detil-first-year">

                    <Link to={'/three'} ><div className="second-semester-detatil-first"><h1>1st</h1></div></Link>
                    <a href="">
                      <div className="second-semester-detatil-Second"> <h1>2nd</h1></div>
                    </a>
                  </div>
                  <div className="second-semester-detil-second-year">

                    <a href=""> <div className="second-semester-detatil-first"><h1>3rd</h1></div></a>
                    <a href=""> <div className="second-semester-detatil-Second"><h1> 4th</h1></div></a>
                  </div>
                  <div className="second-semester-detil-third-year">

                    <a href=""><div className="second-semester-detatil-first"><h1>5th</h1></div></a>
                    <a href=""><div className="second-semester-detatil-first"><h1>6th</h1></div></a>
                  </div>
                  <div className="second-semester-detil-forth-year">

                    <a href=""> <div className="second-semester-detatil-first"><h1>7th</h1></div></a>
                    <a href=""> <div className="second-semester-detatil-Second"><h1>8th</h1></div></a>
                  </div>


                </div>






              </div>
              <div className="second-main-part-right">
                <img src={Sadhu} alt="" />
              </div>



            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Notestwo
