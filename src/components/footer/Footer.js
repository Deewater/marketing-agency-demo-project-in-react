import React from 'react';
import {FaFacebookSquare} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import "./footer.css";
import { Link } from "react-router-dom";
import {IconContext} from "react-icons";


const Footer = () => {
  return (
    <div className='main'>
        
        <div className="main-footer">

        <div className="icons">
        <IconContext.Provider value={{color:"white",size:"25px",className:"global-class-name"}}>
            <a href="#"><FaInstagramSquare/></a>
            <a href="#"><FaTwitterSquare/></a>
            <a href="#"><FaFacebookSquare/></a>
        </IconContext.Provider>
           
            

        </div>
        <div className='privacy'>
        <Link to="/privacy"><span>Privacy | </span></Link>  
        <Link to="/contact_us"><span>Contact Us  | </span></Link>  
        <Link to="/terms&Conditions"><span>Terms & Conditions</span></Link>  

        </div>
       
    </div>
    <p className='copy'>&copy; All Rights are Reserved</p>
    </div>
    
  )
}

export default Footer