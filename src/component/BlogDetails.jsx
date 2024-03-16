import React from "react";
import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, isLoading, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  console.log(id, data, isLoading, error);
  const handleDelete = ()=>{
    fetch( "http://localhost:8000/blogs/" + id,{
      method:'DELETE'
    }).then(()=>{
      history.push('/');
    })
  }
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading....</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
            <p>Written by : {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
