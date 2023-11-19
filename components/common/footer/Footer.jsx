import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>TalkFusion</h1>
            <span>ONLINE LANGUAGE LEARNING WEBSITE</span>
            <p>Best WEBSITE EVER BEFORE EVER AFTER...  Use code:- 'HIMA' to get free life time access to our website but only home page.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Get Started</li>
              <li>Courses</li>
              <li>Testimonial</li>
              <li>Contact us</li>
            </ul>
          </div>
          
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                VIT-AP UNIVERSITY,ANDHRA PRADESH
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 767665843586
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                vit@info.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | This template is made with <i className='fa fa-heart'></i> love by T93.
        </p>
      </div>
    </>
  )
}

export default Footer
