import React from "react";
import Img from "../../images/logoo.svg";

export default function footer() {
  return (
    <div>
      <div className="container-footerr">
        <div className="col-8 ">
          <div className="container custom-footer">
            <ul className="navbar-nav   me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-evenly  custom-footer-nav  ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  RESOURCES
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACTUS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  DONATION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  EVENTS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />

        <div className="footer-customm d-flex justify-content-evenly">
          <div className="row ">
            <div className="col-4">
              <img src={Img} alt="" className=" custom-img-footer" />

              <h6>About US</h6>
              <p>Lorem ipsum dolor sit, a eos vitae, officia eius.</p>
            </div>
          </div>
          <div className="row d-flex">
            <h6>COMPANY</h6>
            <div className="col-5  " >
              <p>home.</p>
              <p>About</p>
              <p>Service</p>
              <p>contact</p>
            </div>
            <div className="col-5">
              <p>Donations</p>
              <p>Events </p>
              <p>Resourse</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>opening Hours</h6>
              <div className="div d-flex justify-content">
                <div className="div">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  
                </div>
                <div className="div">
               <p> 5542155411</p>
                </div>
              </div>
              <div className="div d-flex" >
                <div className="div">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="div">
                  <p>email@example.com</p>
                </div>
              </div>
            </div>

            <div className="col-6">
              <p>Follow Us</p>
              <div className="div d-flex  justify-content-around">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </div>
            </div>
            
          </div>
        </div>
       
        <hr />
        <h7>COPY RIGHTS C 2021. ALL RIGHTS RESERVED BY HARSH</h7>
      </div>
    </div>
  );
}



