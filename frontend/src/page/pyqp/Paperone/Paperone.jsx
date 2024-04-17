import React from 'react'
import './Paperone.css'
import Sidenav from '../../../component/Sidenav/Sidenav'
import { Link } from "react-router-dom";
// import Maincomponent from '../../../component/Maincomponent/Maincomponent'
import Reside from "../../../Images/Redside.jpg"
function Paperone() {
  return (
    <>
      <div className="question-papter-one-main">
      <Sidenav/>
      <div className="question-papter-one-main-child-one">
           <div className="question-paper-section-parent">
            <div className="question-paper-section-child-left">
           <div className="question-paper-section-child-left-QP">
            <h1>Notes</h1>
              <div className="QP-bar"></div>
            </div> 
           <div className="question-paper-section-child-left-text">
            <h2>Select Your Course</h2>
            </div>   
           <div className="question-paper-section-child-left-branch">
         <Link to={'/question-two'} ><div className="QP-course-detail-cse"><h2>Computer Science and Engineering</h2></div></Link>
      <a href=""><div className="QP-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
      <a href=""><div className="QP-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
       <a href=""><div className="QP-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
       <a href=""><div className="QP-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
       <a href=""><div className="QP-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
       <a href=""><div className="QP-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
       <a href=""><div className="QP-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>

           </div>
            </div>
            <div className="question-paper-section-child-right">
              <img src={Reside}  alt="" />
            </div>
           </div>
      </div>  
      </div>
    
    </>
  )
}

export default Paperone
