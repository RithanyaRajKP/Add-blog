import React from "react";
import {Link} from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((i) => {
        return (
          <div className="blog-preview" key={i.id}>
            <Link to = {`/blog/${i.id}`}>
              <h1>{i.title}</h1>
            <i>
              <b>Written by : {i.author}</b>
            </i>
            </Link>
          
            {/* <button onClick={() => handleDelete(i.id)}>Delete blog</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
