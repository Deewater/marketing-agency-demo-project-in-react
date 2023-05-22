import "./post.css";

import React from "react";
import {Link} from "react-router-dom"


import { useContext } from "react";
import { AppContext } from "../../App";

const Post = (props) => {
  const{setId}=useContext(AppContext);



  return (
    <div className="post">
    
      <img src={props.image} />
      <div className="postinfo">
        <div className="categories">
          <span className="category">{props.category1}</span>
          <span className="category">{props.category2}</span>
        </div>
          
          <Link to={"/blog/" + props.id} onClick={()=>setId(props.id)}> <span className="titlee" >{props.title}</span></Link>
          <p className="authorinfo">Author: <b>{props.authorname}</b></p>
        
          
      </div>
      

      <div className="description">{props.description}</div>
    </div>
  );
};

export default Post;
