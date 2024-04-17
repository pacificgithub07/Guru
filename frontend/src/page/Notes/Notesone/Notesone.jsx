import React from "react";
import "./Notesonne.css";
import Sidenav from "../../../component/Sidenav/Sidenav";
import Uppernav from "../../../component/Uppernav/Uppernav";
import { Link } from "react-router-dom";
import Redside from "../../../Images/Redside.jpg"
function Notesone() {
  return (
    <>
      <div className="notes-one-four-main">
        <Sidenav />
        <div className="notes-one-four-main-child-one">
          <div className="Notesdivmain-one">
            <div className="Notesdivmain-page">
              <div className="Notesdivmain-page-left">
                <div className="notesheader-text">
                  {" "}
                  <h1>Notes</h1>{" "}
                </div>
                <div className="notesheader-course">
                  <h1>Select Your Course</h1>
                </div>
                <div className="notes-course-detail">
                  <Link to={"/two"}>
                    {" "}
                    <div className="notes-course-detail-cse">
                      <h2>Computer Science and Engineering</h2>
                    </div>
                  </Link>
                  <a href="">
                    <div className="notes-course-detail-cse">
                      <h2>Information Technology</h2>
                    </div>
                  </a>
                  <a href="">
                    <div className="notes-course-detail-cse">
                      <h2>Mechanical Engineering </h2>
                    </div>
                  </a>
                  <a href="">
                    <div className="notes-course-detail-cse">
                      <h2>Electronic and Communaction Engineering</h2>
                    </div>
                  </a>
                  <a href="">
                    <div className="notes-course-detail-cse">
                      <h2>Bachelor of Computer Applications</h2>
                    </div>
                  </a>
                  <a href="">
                    <div className="notes-course-detail-cse">
                      <h2>Artificial Intelligence & Machine Learning</h2>
                    </div>
                  </a>
                  <a href="">
                    <div className="notes-course-detail-cse">
                      <h2>Bachelor of Business Administration,</h2>
                    </div>
                  </a>
                  <a href="">
                    <div className="notes-course-detail-cse">
                      <h2>Master of Business Administration</h2>
                    </div>
                  </a>
                  
                </div>
              </div>
              <div className="Notesdivmain-page-right">
                <img src={Redside} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notesone;
