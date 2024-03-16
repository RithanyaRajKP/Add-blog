import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Ann");
  const [isLoading, setIsLoading] = useState(false);
const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsLoading(true);
    // console.log(blog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
    setIsLoading(false);
    // history.go(-1); // this is used to go 1 step backward which means one step back to the flow it had come to reach that page, if +1 one level next step if -2 2 level backward to the flow
    history.push('/');
});
  };
  return (
    <div className="create">
      <h2> Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="">Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <label htmlFor="">Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="John">John</option>
          <option value="Ann">Ann</option>
        </select>
        {isLoading && <button type="submit" disabled>Adding Blog...</button>}
        {!isLoading && <button type="submit" >Add Blog</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
