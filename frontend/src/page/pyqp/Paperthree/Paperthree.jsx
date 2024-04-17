import React from 'react';
import './Paperthree.css'
import Sidenav from '../../../component/Sidenav/Sidenav';
import { Link } from 'react-router-dom';
import OpenBook from "../../../Images/OpenBook.jpg"
function Paperthree() {
  return (
    <>
      <div className="question-papter-three-main">
       <Sidenav/>
        <div className="question-papter-three-main-child-one">
              <div className="question-paper-three-section-parent">
                  <div className="question-paper-three-section-child-left">
                    <div className="qp-set">
                    <div className="child-left-QP">
                      <h1>Question Paper</h1>
                    </div>
                    <div className="child-left-QP-bar"></div>
                    </div>
                    <div className="child-left-header">
                      <h2>Select Your Subject</h2>
                    </div>
                     <div className="child-left-QP-select-subject">
                     <Link to={'/question-four'} ><div className="child-left-QP-select-subject-one"><h3>Design and Analysis of Algorithm</h3></div></Link>
                     <div className="child-left-QP-select-subject-one">Design and Analysis of Algorithm</div>
                     <div className="child-left-QP-select-subject-one">Design and Analysis of Algorithm</div>
                     <div className="child-left-QP-select-subject-one">Design and Analysis of Algorithm</div>
                     <div className="child-left-QP-select-subject-one">Design and Analysis of Algorithm</div>
                     <div className="child-left-QP-select-subject-one">Design and Analysis of Algorithm</div>
                     </div>
                     </div>          
                  <div className="question-paper-three-section-child-right">
                    <img src= {OpenBook} alt="" />
                  </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default Paperthree
