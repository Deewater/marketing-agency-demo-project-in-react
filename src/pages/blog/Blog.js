import React from 'react';
import './blog.css';
import Post from '../../components/post/Post';
import { Listposts } from '../../components/Listposts';



const Blog = () => {
  return (
    <div className="blogposts">
{Listposts.map((post)=>{
  return (<Post description={post.description} category1={post.category[0]} category2={post.category[1]} title={post.title} authorname={post.authorName} id={post.id} image={post.image} />)})}
   

   
    </div>
  )
}
export default Blog
