import React from 'react'
import './Notesthree.css'
import Sidenav from '../../../component/Sidenav/Sidenav'
import OpenBook from "../../../Images/OpenBook.jpg"
function Notesthree() {
  return (
    <>
      <div className="notes-three-four-main">
        <Sidenav />
        <div className="notes-three-four-main-child-three">
          <div className="Notes-three-main">
            <div className="Notes-three-main-left">
              <div className="Notes-three-left-note">
                <h1>Notes</h1></div>
              <div className="notes-three-left-subject">
                <h2>Select Your Subject</h2>
              </div>
              <div className="notes-three-suject-main-div">
                <div className="notes-three-suject-main-div-first"><h3>Design and Analysis of Algorithms</h3></div>
                <div className="notes-three-suject-main-div-second"><h3>Computer Organization and Architecture,</h3></div>
                <div className="notes-three-suject-main-div-third"><h3>Operating System(OS)</h3></div>
                <div className="notes-three-suject-main-div-forth"><h3>Universal Human Values</h3></div>
                <div className="notes-three-suject-main-div-five"><h3>Environmental Science.</h3></div>
                <div className="notes-three-suject-main-div-six"><h3>Environmental Science.</h3></div>

              </div>
            </div>
            <div className="Notes-three-main-right">
              <img src={OpenBook} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notesthree
