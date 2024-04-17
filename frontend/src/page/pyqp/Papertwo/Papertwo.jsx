import React from 'react';
import Sidenav from '../../../component/Sidenav/Sidenav';
import './Papertwo.css';
import { Link } from 'react-router-dom';
import Sadhu from "../../../Images/Sadhu.jpg" 
function Papertwo() {
  return (
    <>
      <div className="question-papter-one-main">
           <Sidenav/>
           <div className="question-papter-two-main-child-one">
             <div className="question-paper-two-section-parent">
                <div className="questio-paper-two-section-child-left">
                      <div className="section-division-for-notes">
                      <div className="question-paper-header">
                        <h1>Question Paper</h1>
                      </div>
                      <div className="question-paper-header-bar">
                      </div>
                      </div>
                      <div className="question-paper-semester-header">
                      <h2>Chose your sementer</h2>
                      </div>

                         <div className="question-paper-select-semester">
                            <div className="question-paper-select-semester-first-year">
                                <Link to={'/question-three'} ><div className="question-paper-select-semester-first-year-odd">
                                    <h1>1st</h1>
                                </div></Link>
                                <div className="question-paper-select-semester-first-year-even">
                                    <h1>2nd</h1>
                                </div>
                            </div>
                            <div className="question-paper-select-semester-second-year">
                            <div className="question-paper-select-semester-second-year-odd">
                                <h1>3rd</h1>
                            </div>
                            <div className="question-paper-select-semester-second-year-even">
                                <h1>4th</h1>
                            </div>
                            </div>
                            <div className="question-paper-select-semester-third-year">
                                <div className="question-paper-select-semester-third-year-odd">
                                    <h1>5th</h1>
                                </div>
                                <div className="question-paper-select-semester-third-year-even">
                                    <h1>6th</h1>
                                </div>
                            </div>
                            <div className="question-paper-select-semester-forth-year">
                                <div className="question-paper-select-semester-forth-year-odd">
                                    <h1>7th</h1>
                                </div>
                                <div className="question-paper-select-semester-forth-year-even">
                                    <h1>8th</h1>
                                </div>
                            </div>
                         </div>
                </div>
                <div className="questio-paper-two-section-child-right">
                    <img src={Sadhu} alt="" />
                </div>
             </div>
           </div>

      </div>
    </>
  )
}

export default Papertwo
