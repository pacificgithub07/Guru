import React from "react";
import "./Homepage.css";
import Sidenav from "../../component/Sidenav/Sidenav";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import  CloseBook from "../../Images/CloseBook.jpg"
import  Thinking from "../../Images/Thinking.jpg"
import  Asdoc from "../../Images/Asdoc.png"
import  Mobileapp from "../../Images/Mobileapp.jpg"
import  Logo from "../../Images/log.png"
function Homepage() {
  return (
    <>
      <div className="home-page-main">
        <Sidenav />
        <div className="home-main-container">
          <div className="homepage-container">
            <div className="homepage-content">
              <div className="homepage-right-content">
                <h1 className="book-title">Study The Key to Success</h1>
                <p className="book-description">
                  We design, harder, stronger, Study The key to Success, we
                  design, harder, stronger.
                </p>
              </div>
              <div className="homepage-left-content">
                <img src={CloseBook} alt="Book" className="book-image" />
              </div>
            </div>
          </div>
          <div className="page-two-home">
            <div className="page-twp-home-left">
              <div className="page-two-image">
              <img src={Thinking} alt="" />
              </div>
            </div>
            <div className="page-twp-home-right">
              <div className="page-two-text">
                <h1>Start today</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  debitis, nemo optio sapiente libero recusandae quae qui
                  cupiditate eaque dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="page-three-update">
            <div className="text-update">
              <h1>Our New Update</h1>
            </div>
            <div className="design-update">
              <div className="page-three-update-left">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, nulla quos. Numquam, quis incidunt soluta, veniam, veritatis atque placeat consequatur quia facilis itaque non obcaecati dignissimos maxime explicabo odio? Eius?</p>
              </div>
              <div className="page-three-update-right">
                <div className="page-three-right-image">
                  <img src={Asdoc} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="page-four-app-launch">
          <div className="text-update-app">
              <h1>Future Plan</h1>
            </div>
            <div className="design-update-four">
              <div className="page-four-update-left">
                <img src= {Mobileapp} alt="" />
              </div>
              <div className="page-four-update-right">
                <div className="page-four-right-image">
                    <h2>Exciting News: Our Mobile App Is Coming Soon!</h2>

                </div>
              </div>
            </div>
          </div>
          <div className="querry-box-check">
                  <div className="queery-box-main">
                      <div className="queery-box-text">
                      <h1 className="book-title">we are here to help you </h1>
                      </div>
                      <div className="queery-box-question">

                      </div>
                  </div>
          </div>
          <div className="footer-section">
               <div className="footer-log">
                <img src={Logo} alt="" />
               </div>
              <div className="copy-right">
              <p>&copy; {2024} Guru . All rights reserved.</p>
              </div>
                <div className="footer-social">
                   <a   href="https://www.instagram.com/paci_fic07/" target="_blank"> <li><FaInstagram size={40} /></li></a>
                   <a href="https://www.linkedin.com/in/prashant-singh-cyberops/" target="_blank" > <li><BsTwitterX size={40}  /></li></a>
                    <a href="https://twitter.com/PrashantSi3671" target="_blank"><li><BsLinkedin size={40} /></li></a>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
