import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading....</div>}
      {data && <BlogList blogs={data} title="All Blogs!" />}
      {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />} */}
      {/* <BlogList blogs = {blogs.filter((i)=> i.id == 3)} title = "Marie's Blogs!" /> */}
    </div>
  );
};

export default Home;
