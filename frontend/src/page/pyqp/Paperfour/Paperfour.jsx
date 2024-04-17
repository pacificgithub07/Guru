import React from "react";
import Sidenav from "../../../component/Sidenav/Sidenav";
import "./Paperfour.css";
function Paperfour() {
  return (
    <>
      <div className="question-papter-four-main">
        <Sidenav />
        <div className="question-papter-four-main-child-one">
          <div className="question-papter-four-main-parent">
            <div className="uestion-papter-four-main-parent-left">
                <div className="qt-four">
                    <div className="qt-four-text"><h1>Question Paper</h1></div>
                    <div className="qt-four-bar"></div>
                </div>
                <div className="qt-select-paper"><h2>Select Your Module</h2></div>
                <div className="select-paper-section-paper-module">
                       <div className="elect-paper-section-paper-module-five">
                        <span></span>
                        <h2>Module one</h2></div>
                       <div className="elect-paper-section-paper-module-five">
                        <span></span>
                        <h2>Module Two</h2></div>
                       <div className="elect-paper-section-paper-module-five">
                        <span></span>
                        <h2>Module Three</h2></div>
                       <div className="elect-paper-section-paper-module-five">
                        <span></span>
                        <h2>Module Four</h2></div>
                       <div className="elect-paper-section-paper-module-five">
                        <span></span>
                        <h2>Module Five</h2></div>
                </div>
            </div>
            <div className="question-papter-four-main-parent-right-paternt">
              <div className="right-donwload"><h3>Download</h3></div>
            <div className="question-papter-four-main-parent-right"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paperfour;
