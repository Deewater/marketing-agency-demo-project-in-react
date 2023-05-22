import "./singlepost.css";
import React from 'react';

const SinglePost = (props) => {
  return (
    <div className="singlepost">
        <div className="post_wrapper">
            <img src={props.image} alt="" className="singlephoto" />
            
            <h1 className="title">{props.title}</h1>
            <div className="infocard">
                <span className="classification">{props.category1}</span>
                <span className="classification">{props.category2}</span>
            </div>
            <div className="authorinfo1">
                <span className="author"><i>Author : <b>{props.authorname}</b></i></span>
            </div>
            <p className="content">{props.description}</p>
            
        </div>
      
    </div>
  )
}

export default SinglePost
