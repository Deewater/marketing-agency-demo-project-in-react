import React from "react";
import "./contact.css";
import contact from "../../assest/contact.png";

const Contact = () => {
  return (
    <div className="main_div">
      
      <div
        className="contact_img"
        style={{ backgroundImage: `url(${contact})` }}
      ></div>
      <div className="contact_form">
        <h1>CONTACT US</h1>
        <form>
          
            
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              
              placeholder="First Name"
              required
            />
            
          
          
           
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Last Name"
              
              required
            />
            
       
            
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
         
            
            <input
              type="tel"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Phone Number"
            />
          
            
             
            <textarea
              className="form-control message"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your Message"
            ></textarea>
          
          
            <button className="btn btn-primary" type="submit">
              Submit 
            </button>
          
        </form>
      </div>
    </div>
  );
};
export default Contact;
