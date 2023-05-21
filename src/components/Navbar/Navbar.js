import React from 'react'
import "../Navbar/Navbar.css";
import {Link}  from "react-router-dom";
import navImage from "../Image/navImage.jpg";
import img1 from "../Image/img1.png";
import img2 from "../Image/img2.png";
import img3  from "../Image/img3.png";
import img4 from "../Image/img4.jpg";

function Navbar() {
  return (
    <>
     <header>
     <img src={navImage} alt="agriculture government of india" className="agriculture-logo" />
     <div className='header-disc'>
                <ul>
                    {/* <li class="krishi_heading" lang="hi">कृषि एवं किसान कल्याण विभाग</li>
                    <li class="department_heading" lang="en">DEPARTMENT OF AGRICULTURE &amp; FARMERS WELFARE</li> */}
                    <li className="department_heading-tow" lang="en">
                        <h6 className="logo-text logo-text-one mt-3">
                            <span>भारत सरकार</span>
                            <span>GOVERNMENT OF INDIA</span>
                        </h6>
                        <h6 class="logo-text logo-text-two">
                            <span>कृषि एवं किसान कल्याण मंत्रालय</span>
                            <span>MINISTRY OF AGRICULTURE &amp; FARMERS WELFARE</span>
                        </h6>

                    </li>
                </ul>
                </div>
        <nav>
            <ul>
                <li className='mt-4 mr-10' style={{borderRadius:"10px",backgroundColor:"green",color:"white",padding:"5px",height:"40px"}}>
                    <Link to="/">Home</Link>
                </li>
                <li className='mt-4 mr-3'>
                    <Link to="/about">About</Link>
                </li>
                <li className='mt-4 mr-3'>
                    <Link to="/auth">Login</Link>
                </li>
                <li>
                  <img src={img2} alt="" srcset="" />
                </li>
                <li>
                  <img src={img3} alt="" srcset="" />
                </li>
                <li>
                  <img src={img4} alt="" srcset="" />
                </li>
            </ul>
        </nav>
    </header>
   
    </>
  )
}

export default Navbar