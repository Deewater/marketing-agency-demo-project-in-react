import "./navbar.css";
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assest/on9.png"
import {GiHamburgerMenu} from "react-icons/gi";
import { useState } from "react";
import {IconContext} from "react-icons"

const Navbar = () => {
  const [toggle,SetToggle]=useState(false)
  const Togglefunc=()=>{SetToggle(!toggle)
    
    
    

  }
  return (
    <nav className="main-nav">
        <div className="logo-nav">
           <Link to="/" onClick={toggle}><img src={logo} alt="on-nine branding co."/></Link> 

        </div>
        
        <div className={toggle?"mobile-menu":"links"}>
            <ul>
                <Link to="/" onClick={()=>SetToggle(false)}><li>Home</li></Link>
                <Link to="/services" onClick={()=>SetToggle(false)}><li>Services</li></Link>
                <Link to="/blog" onClick={()=>SetToggle(false)}><li>Blog</li></Link>
                <Link to="/contact_us" onClick={()=>SetToggle(false)}><li>Contact Us</li></Link>
            </ul>
            
        </div>
        <div className="humburger">
      <IconContext.Provider value={{color:"white",size:"25px",className:"global-class-name"}}><Link to="#" onClick={Togglefunc}><GiHamburgerMenu/></Link></IconContext.Provider>
          
              
            </div>
    </nav>
  )
}

export default Navbar