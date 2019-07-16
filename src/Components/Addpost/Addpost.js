import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Addpost({getPostTitle, pushPost, getPostDesc, postDesc, postTitle, getPostImage, postImage}) {
    return (
        <div>
            <div>
                <h1>This is the page to add posts</h1>
            </div>
            <div>         
                Post Title:
                <input type="text" onChange={(e)=>{getPostTitle(e)}} value={postTitle}></input>
                Post Description:
                <input type="text" onChange={(f)=>{getPostDesc(f)}} value={postDesc}></input>
                Post Image:
                <input type="text" onChange={(g) => {getPostImage(g)}} value={postImage}></input>
                <button onClick={()=>{pushPost()}}>Submit</button>                 
            </div>
            <hr />
            <div>
              <Link to="/gallery">GALLERY</Link>
            </div>
            <hr />
            <div>
              <Link to="/">Home</Link>
            </div>
        </div>
    );
}




export default Addpost;