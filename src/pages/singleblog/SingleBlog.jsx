import React from 'react';
import "./singleblog.css"
import SinglePost from '../../components/singlepost/SinglePost';
import { Listposts } from '../../components/Listposts';

import { useContext } from "react";
import { AppContext } from '../../App';



const SingleBlog = () => {
  const{id}=useContext(AppContext);
  
  return (
  
    <div>
      {console.log(id)}
      {Listposts.map((post)=>{
        if (id===post.id)
   return (<SinglePost description={post.description} category1={post.category[0]} category2={post.category[1]} title={post.title} authorname={post.authorName} id={post.id} image={post.image}/>)})}
   
    
    </div>
  )
}

export default SingleBlog
